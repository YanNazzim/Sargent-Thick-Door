import React from 'react';

const Spindle = ({ position, thickness }) => {
  // Base length of the spindle for 1.75" thickness
  const baseLength = 2.780;

  // Calculate spindle length based on door thickness
  const extraLength = thickness - 1.75; // Additional length for thicker doors
  const spindleLength = baseLength + extraLength;

  // Adjust position to keep the spindle aligned
  const spindlePosition = position.slice(); // Copy the original position
  spindlePosition[2] -= spindleLength / 2; // Adjust for the length

  return (
    <mesh position={spindlePosition}>
      <boxGeometry args={[0.34375, 0.34375, spindleLength]} /> {/* Adjusted length */}
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Spindle;
