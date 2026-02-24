"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fond de base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Blob 1 - Bleu */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #3B82F6, transparent 70%)",
          animation: "aurora1 25s ease-in-out infinite",
          top: "10%",
          left: "15%",
        }}
      />

      {/* Blob 2 - Violet */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #8B5CF6, transparent 70%)",
          animation: "aurora2 30s ease-in-out infinite",
          top: "40%",
          right: "10%",
        }}
      />

      {/* Blob 3 - Rose */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #EC4899, transparent 70%)",
          animation: "aurora3 35s ease-in-out infinite",
          bottom: "10%",
          left: "30%",
        }}
      />

      {/* Blob 4 - Cyan */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #06B6D4, transparent 70%)",
          animation: "aurora4 28s ease-in-out infinite",
          top: "60%",
          left: "5%",
        }}
      />

      <style jsx>{`
        @keyframes aurora1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, 50px) scale(1.1); }
          50% { transform: translate(50px, 120px) scale(0.9); }
          75% { transform: translate(-80px, 60px) scale(1.05); }
        }
        @keyframes aurora2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-120px, 80px) scale(1.15); }
          50% { transform: translate(-60px, -100px) scale(0.85); }
          75% { transform: translate(80px, -40px) scale(1.1); }
        }
        @keyframes aurora3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, -60px) scale(1.1); }
          50% { transform: translate(-100px, -80px) scale(0.95); }
          75% { transform: translate(-40px, 100px) scale(1.05); }
        }
        @keyframes aurora4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(60px, -100px) scale(1.2); }
          50% { transform: translate(120px, 40px) scale(0.9); }
          75% { transform: translate(-60px, -60px) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
