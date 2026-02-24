"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "highlight" | "premium";
  className?: string;
}

const variants = {
  default: "bg-white/10 text-slate-300",
  highlight: "bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/20",
  premium: "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-sm shadow-blue-500/20",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
