"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useDeviceCapability } from "./useDeviceCapability";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CardModel from "./CardModel";
import CardEnvironment from "./CardEnvironment";
import Skeleton from "@/components/shared/Skeleton";
import WebGLFallback from "@/components/shared/WebGLFallback";

export default function CardScene() {
  const { tier, supportsWebGL } = useDeviceCapability();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  if (!supportsWebGL || tier === "none") {
    return <WebGLFallback />;
  }

  return (
    <div className="w-full h-full">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <Skeleton className="w-48 h-72 lg:w-64 lg:h-96" />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 3], fov: 30 }}
          dpr={tier === "high" ? [1, 2] : [1, 1.5]}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            alpha: true,
          }}
          style={{ background: "transparent", touchAction: "pan-y" }}
        >
          <CardEnvironment tier={tier} />
          <CardModel tier={tier} />

          {/* Rotation auto + drag libre (desactive sur mobile pour permettre le scroll) */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={3}
            enableZoom={false}
            enablePan={false}
            enableRotate={!isMobile}
            rotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
