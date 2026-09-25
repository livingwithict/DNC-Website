import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const SESSION_KEY = "dnc-roadblock-shown";

export default function RoadblockAd() {
  const [open, setOpen] = useState(() => !sessionStorage.getItem(SESSION_KEY));

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-[100] flex items-center justify-center p-2"
      onClick={close}
    >
      <div
        className="relative rounded-lg shadow-2xl border border-slate-100 overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full text-slate-500 hover:text-slate-800 transition z-10 shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src="/images/DNC_Postponed.jpg"
          alt="Notice"
          className="block max-w-[85vw] max-h-[85vh] w-auto h-auto object-contain"
        />
      </div>
    </div>,
    document.body
  );
}
