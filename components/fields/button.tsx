"use client";

import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

import { cn } from "@/utils/cn";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?:boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  disabled,
  className,
  fullWidth
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        `
        flex
        justify-center
        font-DanaBold
        h-12
        py-3    
        bg-black
        text-white
        outline-none
        text-lg
        `,
        disabled && "opacity-50",
        fullWidth && "w-full",
        className
      )}
    >
      {disabled ? <BeatLoader color="#36d7b7" /> : children}
    </button>
  );
};

export default Button;
