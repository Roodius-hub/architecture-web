"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick:() => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
