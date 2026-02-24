"use client";

import { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

interface CardModelProps {
  tier: "high" | "medium" | "low" | "none";
}

const CARD_WIDTH = 0.856;
const CARD_HEIGHT = 1.28;
const CARD_DEPTH = 0.014;
const CORNER_RADIUS = 0.04;
const SEGMENTS = 20;

function createRoundedRectShape(w: number, h: number, r: number): THREE.Shape {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function fixUVs(geo: THREE.ShapeGeometry, w: number, h: number) {
  const uv = geo.getAttribute("uv");
  const pos = geo.getAttribute("position");
  for (let i = 0; i < uv.count; i++) {
    uv.setXY(i, (pos.getX(i) + w / 2) / w, (pos.getY(i) + h / 2) / h);
  }
  uv.needsUpdate = true;
}

export default function CardModel({ tier }: CardModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  const frontTex = useLoader(THREE.TextureLoader, "/images/card/front.png");
  const backTex = useLoader(THREE.TextureLoader, "/images/card/back.png");

  useMemo(() => {
    for (const t of [frontTex, backTex]) {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 16;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.magFilter = THREE.LinearFilter;
    }
  }, [frontTex, backTex]);

  // Geometrie du corps (juste les cotes/bords)
  const edgeGeo = useMemo(() => {
    const shape = createRoundedRectShape(CARD_WIDTH, CARD_HEIGHT, CORNER_RADIUS);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: CARD_DEPTH,
      bevelEnabled: false,
      curveSegments: SEGMENTS,
    });
    geo.translate(0, 0, -CARD_DEPTH / 2);
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Face avant
  const frontGeo = useMemo(() => {
    const geo = new THREE.ShapeGeometry(
      createRoundedRectShape(CARD_WIDTH, CARD_HEIGHT, CORNER_RADIUS),
      SEGMENTS
    );
    fixUVs(geo, CARD_WIDTH, CARD_HEIGHT);
    return geo;
  }, []);

  // Face arriere
  const backGeo = useMemo(() => {
    const geo = new THREE.ShapeGeometry(
      createRoundedRectShape(CARD_WIDTH, CARD_HEIGHT, CORNER_RADIUS),
      SEGMENTS
    );
    fixUVs(geo, CARD_WIDTH, CARD_HEIGHT);
    return geo;
  }, []);

  const hasClearcoat = tier === "high" || tier === "medium";

  // Multi-material : caps invisibles (group 0) + bords visibles (group 1)
  const edgeMaterials = useMemo(() => {
    const capMat = new THREE.MeshBasicMaterial({ visible: false });
    const sideMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#fcfcfe"),
      roughness: 0.25,
      metalness: 0,
      clearcoat: hasClearcoat ? 0.4 : 0,
      clearcoatRoughness: 0.15,
      envMapIntensity: 0.3,
    });
    return [capMat, sideMat];
  }, [hasClearcoat]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Flottement doux
    const floatY = Math.sin(t * 0.6) * 0.02;
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, floatY, 0.04);
  });

  return (
    <group ref={groupRef}>
      {/* Bords / tranche - caps invisibles, seuls les cotes sont visibles */}
      <mesh geometry={edgeGeo} material={edgeMaterials} castShadow />

      {/* RECTO - texture avant */}
      <mesh geometry={frontGeo} position={[0, 0, CARD_DEPTH / 2 + 0.0005]}>
        <meshPhysicalMaterial
          map={frontTex}
          roughness={0.25}
          metalness={0.0}
          clearcoat={hasClearcoat ? 0.4 : 0}
          clearcoatRoughness={0.15}
          envMapIntensity={0.3}
        />
      </mesh>

      {/* VERSO - texture arriere */}
      <mesh
        geometry={backGeo}
        position={[0, 0, -CARD_DEPTH / 2 - 0.0005]}
        rotation={[0, Math.PI, 0]}
      >
        <meshPhysicalMaterial
          map={backTex}
          roughness={0.25}
          metalness={0.0}
          clearcoat={hasClearcoat ? 0.4 : 0}
          clearcoatRoughness={0.15}
          envMapIntensity={0.3}
        />
      </mesh>
    </group>
  );
}
