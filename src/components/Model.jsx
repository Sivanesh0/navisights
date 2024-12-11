import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Scooter = () => {
  const { scene } = useGLTF(
    "/navisights-trike/navisights_trike_assy_file.gltf"
  );
  return (
    <primitive
      rotation={[0, 1.3, 0]}
      object={scene}
      scale={30}
      position={[-80, -30, 10]}
    />
  );
};

const Model = () => {
  return (
    <div className='h-[50vh] md:h-screen'>
      <Canvas
        className='bg-transparent'
        shadows='variance'
        camera={{ position: [100, 50, -50], fov: 50 }}
        gl={{ antialias: true }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[100, 50, -50]} intensity={0.5} />
        <directionalLight position={[0, 50, -50]} intensity={0.5} />
        <directionalLight position={[0, 0, 50]} intensity={0.3} />
        <Scooter />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Model;
