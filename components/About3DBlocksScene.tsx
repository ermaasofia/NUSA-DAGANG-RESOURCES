'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { PresentationControls, Float, RoundedBox } from '@react-three/drei';

interface BlockProps {
  position: [number, number, number];
  baseRotation: [number, number, number];
  floatSpeed: number;
}

function IndependentChunkyBlock({ position, baseRotation, floatSpeed }: BlockProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load Logo Texture for Front Face (+Z)
  const texture = useLoader(THREE.TextureLoader, '/logonusa2.png');
  texture.colorSpace = THREE.SRGBColorSpace;

  // Materials Array: [+X, -X, +Y, -Y, +Z (Front), -Z]
  const materials = useMemo(() => {
    const sideMat = new THREE.MeshStandardMaterial({
      color: '#133820', // Brand Dark Forest Green
      roughness: 0.35,
      metalness: 0.25,
    });

    const frontMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.2,
      metalness: 0.15,
    });

    const backMat = new THREE.MeshStandardMaterial({
      color: '#0d2816',
      roughness: 0.4,
      metalness: 0.2,
    });

    return [sideMat, sideMat, sideMat, sideMat, frontMat, backMat];
  }, [texture]);

  // Subtle floating idle motion
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime * floatSpeed;
      meshRef.current.position.y = Math.sin(t) * 0.05;
    }
  });

  return (
    // Independent PresentationControls per block (global={false} keeps drag local)
    <group position={position}>
      <PresentationControls
        global={false}
        cursor={true}
        snap={true}
        speed={2}
        zoom={1}
        rotation={baseRotation}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <Float floatIntensity={0.4} rotationIntensity={0.2} speed={floatSpeed}>
          <RoundedBox
            ref={meshRef}
            args={[2.6, 1.2, 0.75]} // Substantial depth / thick 3D block
            radius={0.06} // Smooth rounded bevel edges
            smoothness={4}
            material={materials}
            castShadow
            receiveShadow
          />
        </Float>
      </PresentationControls>
    </group>
  );
}

export default function About3DBlocksScene() {
  return (
    <div className="w-full h-[520px] md:h-[640px] relative flex items-center justify-center">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 42 }}
      >
        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 7, 5]} intensity={2.0} color="#fff6e5" />
        <directionalLight position={[-5, -2, 2]} intensity={0.8} color="#fbbf24" />
        <pointLight position={[0, -4, 3]} intensity={0.6} color="#34d399" />

        {/* Block 1 (Top Block - Independent Drag) */}
        <IndependentChunkyBlock
          position={[-0.25, 1.45, 0]}
          baseRotation={[0.18, -0.28, 0.08]}
          floatSpeed={1.3}
        />

        {/* Block 2 (Middle Block - Independent Drag) */}
        <IndependentChunkyBlock
          position={[0.35, 0, 0.25]}
          baseRotation={[-0.12, 0.25, -0.06]}
          floatSpeed={1.6}
        />

        {/* Block 3 (Bottom Block - Independent Drag) */}
        <IndependentChunkyBlock
          position={[-0.2, -1.45, 0.04]}
          baseRotation={[0.14, -0.2, -0.1]}
          floatSpeed={1.2}
        />
      </Canvas>
    </div>
  );
}
