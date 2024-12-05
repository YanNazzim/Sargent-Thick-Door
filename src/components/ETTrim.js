import React from 'react';

const ETTrim = ({ position }) => {
  // Hole position and parameters
  const hole1Position = [0, 1.5, -.2187];
  const holeRadius = 0.53125; // Radius of the hole
  const holeDepth = 1.250; // Depth of the hole

  return (
    <group position={position}>
      {/* Main ETTrim Geometry */}
      <mesh>
        <boxGeometry args={[1.8125, 8.0625, 0.8125]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* Hole 1 */}
      <mesh position={hole1Position} rotation={[Math.PI / 2, 0, 0]}> {/* Rotated 90 degrees around the x-axis */}
        <cylinderGeometry args={[holeRadius, holeRadius, holeDepth, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

    </group>
  );
};

export default ETTrim;
