import { useEffect, useState } from "react";

export default function FloatingCTA({ variant = "CAREGIVER" }) {
  const [show, setShow] = useState(false);

  const isChild = variant === "CHILD";

  const title = isChild ? "어린이보험 상담 신청" : "간병보험 상담 신청";
  const subtitle = isChild
    ? "1분 입력으로 어린이보험 상담 연결"
    : "1분 입력으로 간병보험 상담 연결";

  const targetId = isChild ? "child" : "caregiver";

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="text-lg font-extrabold text-secondary truncate">
            {title}
          </p>
          <p className="text-gray-600 truncate">{subtitle}</p>
        </div>

        <button
          className="shrink-0 w-40 rounded-md bg-main py-2 text-lg font-semibold text-white hover:bg-main/90"
          onClick={() => {
            const el = document.querySelector(`#${targetId}`);
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          신청하기
        </button>
      </div>
    </div>
  );
}
