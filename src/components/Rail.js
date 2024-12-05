import React from "react";

const Rail = ({ position }) => {
  return (
    <group position={position}>
      {/* Main Rail */}
      <mesh>
        <boxGeometry args={[31, 2.6, 1]} /> {/* Dimensions for the main rail */}
        <meshStandardMaterial color="Silver" />
      </mesh>

      {/* Push Portion */}
      <mesh position={[3.75, 0, .5]}>
        <boxGeometry args={[20, 2, 1]} /> {/* Dimensions for the push bar */}
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Lexan Pad */}
      <mesh position={[3.75, 0, 1]}>
        <boxGeometry args={[16, 1.5, 0.55]} /> {/* Slightly larger than push bar */}
        <meshStandardMaterial
          color="black"
          transparent
          opacity={0.5} /* Transparent material for Lexan pad */
        />
      </mesh>
    </group>
  );
};

export default Rail;
