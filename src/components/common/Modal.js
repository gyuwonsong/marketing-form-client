import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function Modal({ open, title, children, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        className="absolute inset-0 bg-black/40"
        aria-label="close"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl max-h-[85vh] rounded-2xl bg-white shadow-lg flex flex-col">
        <div className="flex items-center justify-between gap-3 border-b px-6 py-4 shrink-0">
          <h3 className="text-xl font-bold text-secondary">{title}</h3>

          <button
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
            onClick={onClose}
            aria-label="닫기"
            type="button"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 text-sm text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
