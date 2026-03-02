import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function RotatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial
        color="#7B2FFF"
        wireframe
        emissive="#00D4FF"
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

const Scene3D = () => {
  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00D4FF" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7B2FFF" />
        <RotatingIcosahedron />
      </Canvas>
    </div>
  );
};

export default Scene3D;
