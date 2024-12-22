import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Chassis = ({ position}) => {
  // Load the base chassis model
  const Chassis8800 = useLoader(GLTFLoader, "/models/ChassisBlank.gltf");
  const Latchbolt8800 = useLoader(GLTFLoader, "/models/Latchbolt8800.gltf");

  return (
    <group position={position}>
      {/* 8800 Chassis */}
      <primitive
        rotation={[Math.PI, Math.PI, 0]} // Default no rotation
        object={Chassis8800.scene}
        position={[0, 41, -.375]} // Adjust as necessary
        scale={[30, 30, 30]} // Adjust scale to match your scene
      />
      <primitive
        rotation={[Math.PI/2, 0, Math.PI]} // Default no rotation
        object={Latchbolt8800.scene}
        position={[0, 41, 0]} // Adjust as necessary
        scale={[30, 30, 30]} // Adjust scale to match your scene
      />

      ))
    </group>
  );
};

export default Chassis;
