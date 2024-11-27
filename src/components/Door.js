import React from "react";

const Door = ({ hideDoor, thickness = 1.75 }) => {
  const MAX_THICKNESS = 5;
  const doorThickness = Math.min(thickness, MAX_THICKNESS); // Limit thickness to 5"

  return (
    <group>
      {/* Full Door */}
      {!hideDoor && (
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[36, 84, doorThickness]} />
          <meshStandardMaterial color="White" />
        </mesh>
      )}

      {/* Door with Cutout */}
      {hideDoor && (
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[36, 84, doorThickness]} />
          <meshStandardMaterial
            color="Gray"
            transparent
            opacity={0.5} // Optional transparency for the door
          />
        </mesh>
      )}
    </group>
  );
};

export default Door;
