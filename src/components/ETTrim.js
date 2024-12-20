import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ETTrim = ({ position }) => {
  // Load the GLTF model
  const gltf = useLoader(GLTFLoader, "/models/ETTrim.gltf");

  return (
    <group position={position} scale={[30, 30, 30]}> {/* Adjust the scale as needed */}
      <primitive object={gltf.scene} />
    </group>
  );
};

export default ETTrim;
