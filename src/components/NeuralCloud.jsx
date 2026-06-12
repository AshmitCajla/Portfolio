import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSwarm = () => {
  const ref = useRef();
  const particlesCount = 6000;

  const positions = useMemo(() => {
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    return posArray;
  }, [particlesCount]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow base rotation
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x -= delta * 0.025;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

// NEW: This component tracks the mouse and moves the camera
const CameraRig = () => {
  useFrame((state) => {
    // Lerp (smoothly move) the camera based on pointer position
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.pointer.x * 0.5), 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.pointer.y * 0.5), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

export default function NeuralCloud() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <CameraRig />
      <ParticleSwarm />
    </Canvas>
  );
}