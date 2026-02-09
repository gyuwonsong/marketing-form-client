import { useEffect, useState } from "react";

const CTA_CONFIG = {
  CAREGIVER: {
    title: "간병보험 상담 신청",
    subtitle: "1분 입력으로 간병보험 상담 연결",
    targetId: "caregiver",
  },
  CHILD: {
    title: "어린이보험 상담 신청",
    subtitle: "1분 입력으로 어린이보험 상담 연결",
    targetId: "child",
  },
  FETUS: {
    title: "태아보험 상담 신청",
    subtitle: "1분 입력으로 태아보험 상담 연결",
    targetId: "fetus",
  },
  CANCER: {
    title: "암보험 상담 신청",
    subtitle: "1분 입력으로 암보험 상담 연결",
    targetId: "cancer",
  },
  HEALTH: {
    title: "종합건강보험 상담 신청",
    subtitle: "1분 입력으로 종합건강보험 상담 연결",
    targetId: "health",
  },
  SIMPLE: {
    title: "간편보험 상담 신청",
    subtitle: "1분 입력으로 간편보험 상담 연결",
    targetId: "simple",
  },
  MEDICAL: {
    title: "실비보험 상담 신청",
    subtitle: "1분 입력으로 실비보험 상담 연결",
    targetId: "medical",
  },
  YOUTH: {
    title: "청년보험 상담 신청",
    subtitle: "1분 입력으로 청년보험 상담 연결",
    targetId: "youth",
  },
  DEMENTIA_CARE: {
    title: "치매간병보험 상담 신청",
    subtitle: "1분 입력으로 치매간병보험 상담 연결",
    targetId: "dementia-care",
  },
};

export default function FloatingCTA({ variant = "CAREGIVER" }) {
  const [show, setShow] = useState(false);

  const config = CTA_CONFIG[variant] || CTA_CONFIG.CAREGIVER;
  const { title, subtitle, targetId } = config;

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
