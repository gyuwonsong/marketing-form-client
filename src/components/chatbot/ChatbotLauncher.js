import { useMemo } from "react";
import { PATHS } from "../../app/routes";
import owlIcon from "../../assets/owl-logo.svg";

export default function ChatbotLauncher({
  title = "AI 상담 챗봇",
  popupPath = PATHS.chatbot,
}) {
  const features = useMemo(() => ({ width: 420, height: 780 }), []);

  const openPopup = () => {
    const w = features.width;
    const h = features.height;

    const dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const left = width / 2 - w / 2 + dualScreenLeft;
    const top = height / 2 - h / 2 + dualScreenTop;

    const opts = `
      width=${w},
      height=${h},
      left=${left},
      top=${top},
      resizable=yes,
      scrollbars=yes
    `;

    window.open(popupPath, "chatbot", opts);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 z-[999]">
      <button
        onClick={openPopup}
        className="relative flex flex-col items-center group"
      >
        <div
          className="
      mb-2
      rounded-full
      bg-white
      px-2 py-1
      text-[12px] sm:text-[14px] md:text-[16px]
      font-extrabold
      text-secondary
      shadow
    "
        >
          {title}
        </div>

        <div
          className="
        relative
        h-16 w-16
        sm:h-28 sm:w-28
        md:h-30 md:w-30
        rounded-full
        border-[4px]
        border-main
        bg-white
        shadow-xl
        flex items-center justify-center
        transition
        group-hover:scale-105
      "
        >
          <img
            src={owlIcon}
            alt="AI 상담 챗봇"
            className="h-[100%] w-[100%] object-contain select-none"
            draggable={false}
          />

          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-main animate-ping" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-main" />
        </div>
      </button>
    </div>
  );
}
