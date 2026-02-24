"use client";

import { Environment, ContactShadows, Lightformer } from "@react-three/drei";

interface CardEnvironmentProps {
  tier: "high" | "medium" | "low" | "none";
}

export default function CardEnvironment({ tier }: CardEnvironmentProps) {
  return (
    <>
      {/* Lumiere principale douce (key light) */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.2}
        castShadow={tier === "high"}
        color="#ffffff"
      />

      {/* Fill light douce */}
      <directionalLight
        position={[-4, 3, -2]}
        intensity={0.4}
        color="#e8e8ff"
      />

      {/* Rim light pour les bords */}
      <directionalLight
        position={[0, -2, -5]}
        intensity={0.3}
        color="#ffffff"
      />

      <ambientLight intensity={0.3} />

      {/* Environnement studio avec lightformers pour reflets premium */}
      {tier !== "low" && (
        <Environment resolution={256}>
          {/* Grande softbox au dessus */}
          <Lightformer
            form="rect"
            intensity={2}
            position={[0, 4, 0]}
            scale={[10, 2, 1]}
            rotation-x={Math.PI / 2}
            color="#ffffff"
          />
          {/* Accent lateral gauche */}
          <Lightformer
            form="rect"
            intensity={1}
            position={[-5, 2, 0]}
            scale={[1, 4, 1]}
            rotation-y={Math.PI / 2}
            color="#f0f0ff"
          />
          {/* Accent lateral droit */}
          <Lightformer
            form="rect"
            intensity={0.8}
            position={[5, 1, 0]}
            scale={[1, 3, 1]}
            rotation-y={-Math.PI / 2}
            color="#fff8f0"
          />
          {/* Fond */}
          <Lightformer
            form="rect"
            intensity={0.4}
            position={[0, 0, -6]}
            scale={[10, 10, 1]}
            color="#f5f5f5"
          />
        </Environment>
      )}

      {/* Ombre de contact au sol */}
      {tier === "high" && (
        <ContactShadows
          position={[0, -0.9, 0]}
          opacity={0.25}
          scale={3}
          blur={2.5}
          far={3}
          color="#1a1a2e"
        />
      )}
    </>
  );
}
