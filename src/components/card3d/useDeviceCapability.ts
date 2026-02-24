"use client";

import { useEffect, useState } from "react";

type PerformanceTier = "high" | "medium" | "low" | "none";

interface DeviceCapability {
  tier: PerformanceTier;
  supportsWebGL: boolean;
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    tier: "medium",
    supportsWebGL: true,
  });

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") || canvas.getContext("webgl");

    if (!gl) {
      setCapability({ tier: "none", supportsWebGL: false });
      return;
    }

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = debugInfo
      ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      : "";

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const memory = (navigator as unknown as Record<string, unknown>).deviceMemory as number | undefined;
    const cores = navigator.hardwareConcurrency || 2;

    let tier: PerformanceTier = "high";

    // Downgrade based on device capabilities
    if (isMobile) tier = "medium";
    if (memory && memory <= 2) tier = "low";
    if (cores <= 2) tier = "low";
    if (/SwiftShader|Software/i.test(renderer)) tier = "low";

    setCapability({ tier, supportsWebGL: true });
  }, []);

  return capability;
}
