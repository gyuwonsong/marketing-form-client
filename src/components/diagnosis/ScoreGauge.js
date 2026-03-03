import { useEffect, useState } from "react";

export default function ScoreGauge({
  from = 62,
  to = 89,
  duration = 2,
  size = 220,
  stroke = 16,
}) {
  const [score, setScore] = useState(from);

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let start = from;
    const increment = (to - from) / (duration * 60);
    let animationFrame;

    const update = () => {
      start += increment;
      if (start < to) {
        setScore(Math.floor(start));
        animationFrame = requestAnimationFrame(update);
      } else {
        setScore(to);
      }
    };

    update();
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  const progress = (score / 100) * circumference;
  const offset = circumference - progress;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size}>
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />

          <circle
            stroke="currentColor"
            className="text-main transition-all duration-300"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-extrabold text-secondary">
            {score}
          </span>
          <span className="text-gray-500">보험 보장 점수</span>
        </div>
      </div>

      <p className="mt-6 text-xl text-main">
        62점 → <span className="font-bold"> 89점 </span> 개선
      </p>
    </div>
  );
}
