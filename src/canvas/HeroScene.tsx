import { Float, Icosahedron } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

function FloatingShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }

    const { x, y } = state.pointer;

    meshRef.current.rotation.x +=
        (-y * 0.25 - meshRef.current.rotation.x) * 0.03;

    meshRef.current.rotation.y +=
        (x * 0.35 - meshRef.current.rotation.y) * 0.03;
  });

  return (
    <Float
      speed={1.3}
      rotationIntensity={0.35}
      floatIntensity={0.6}
    >
      <Icosahedron
        ref={meshRef}
        args={[1.6, 4]}
      >
        <meshStandardMaterial
          color="#4d4352"
          emissive="#b06eda"
          emissiveIntensity={0.28}
          roughness={0.42}
          metalness={0.3}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div
      className="hero-scene"
      aria-hidden="true"
    >
      <Canvas
        frameloop="always"
        camera={{
          position: [0, 0, 5],
          fov: 42,
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.1} />

        <pointLight
          position={[3, 3, 4]}
          intensity={12}
          color="#b06eda"
        />

        <FloatingShape />
      </Canvas>
    </div>
  );
}