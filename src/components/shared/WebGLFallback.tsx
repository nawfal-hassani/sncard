"use client";

import { motion } from "framer-motion";

export default function WebGLFallback() {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Carte en fallback CSS */}
      <div className="relative w-48 h-72 lg:w-64 lg:h-96 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl shadow-black/30 border border-gray-700/50">
        {/* Contenu stylise de la carte */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <div className="text-white text-xl font-bold tracking-tight">
            SN<span className="text-gray-400">Card</span>
          </div>
          <div className="mt-2 text-gray-500 text-xs">NFC</div>
          {/* Cercle NFC stylise */}
          <div className="mt-6 w-12 h-12 rounded-full border-2 border-gray-600/50 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border border-gray-500/50" />
          </div>
        </div>
        {/* Reflet */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}
