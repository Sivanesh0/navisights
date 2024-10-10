import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Scooter = () => {
  const { scene } = useGLTF("/electric_bike/scene.gltf");
  return <primitive object={scene} scale={0.05} position={[30, -40, 20]} />;
};

const Model = () => {
  return (
    <div className='h-[50vh] md:h-screen'>
      <Canvas
        className='bg-transparent'
        shadows='variance'
        camera={{ position: [100, 50, -50], fov: 50 }}
        gl={{ antialias: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[100, 50, -50]} intensity={1} />
        <Scooter />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Model;
