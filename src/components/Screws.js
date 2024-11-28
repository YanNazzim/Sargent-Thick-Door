import React from "react";

const Screws = ({ position, thickness }) => {
  // Base length of the screw for 1.75" thickness
  const baseLength = 2.8;

  // Calculate screw length based on door thickness
  const extraLength = thickness - 1.75; // Additional length for thicker doors
  const screwLength = baseLength + extraLength;

  // Calculate offset to keep screws slightly visible on the chassis side
  const chassisOffset = -0.05; // Slight visibility from the chassis side

  // Calculate new position on the Z-axis to align screws correctly
  const screwPosition = position.slice(); // Copy the original position
  screwPosition[2] += chassisOffset - screwLength / 2; // Adjust for length and visibility

  return (
    <mesh position={screwPosition}>
      <boxGeometry args={[0.22, 0.22, screwLength]} /> {/* Adjusted length */}
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default Screws;
