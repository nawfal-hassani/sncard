import { create } from "zustand";

interface CardStore {
  activeSection: string;
  mousePosition: { x: number; y: number };
  isHovered: boolean;
  scrollProgress: number;
  setActiveSection: (section: string) => void;
  setMousePosition: (pos: { x: number; y: number }) => void;
  setIsHovered: (hovered: boolean) => void;
  setScrollProgress: (progress: number) => void;
}

export const useCardStore = create<CardStore>((set) => ({
  activeSection: "hero",
  mousePosition: { x: 0, y: 0 },
  isHovered: false,
  scrollProgress: 0,
  setActiveSection: (section) => set({ activeSection: section }),
  setMousePosition: (pos) => set({ mousePosition: pos }),
  setIsHovered: (hovered) => set({ isHovered: hovered }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
