"use client";

import { voidFuncType } from "@/types";

interface OverlayProps {
  onClose: voidFuncType;
}

const Overlay: React.FC<OverlayProps> = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-overlay backdrop-blur-xs w-full transition-all z-10transition-all duration-150"
    ></div>
  );
};

export default Overlay;
