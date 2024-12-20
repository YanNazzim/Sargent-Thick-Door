import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Chassis = ({ position, parts = [] }) => {
  // Load the base chassis model
  const chassisModel = useLoader(GLTFLoader, "/models/ChassisBlank.gltf");

  return (
    <group position={position}>
      {/* Chassis Base */}
      <primitive
        rotation={[Math.PI, Math.PI, 0]} // Default no rotation
        object={chassisModel.scene}
        position={[0, 41, -.375]} // Adjust as necessary
        scale={[30, 30, 30]} // Adjust scale to match your scene
      />

      {/* Additional Parts */}
      {parts.map((part, index) => (
        <primitive
          key={index}
          object={part.model.scene}
          position={part.position || [0, 0, 0]} // Default to [0, 0, 0] if no position is provided
          scale={part.scale || [30, 30, 30]} // Default scale
        />
      ))}
    </group>
  );
};

export default Chassis;
