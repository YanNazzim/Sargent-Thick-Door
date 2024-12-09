import React from "react";

const ETTrim = ({ position }) => {
  // Hole position and parameters
  const hole1Position = [0, 1.5, -0.2187];
  const holeRadius = 0.53125; // Radius of the hole
  const holeDepth = 1.25; // Depth of the hole
  const leverBasePosition = [0, -1.35, -0.5];
  const leverBaseRadius = 0.33; // Radius of the hole
  const LeverBaseDepth = 1.5; // Depth of the hole
  const leverHandlePosition = [-1.35, -1.35, -1.35];

  return (
    <group position={position}>
      {/* ET Case */}
      <mesh>
        <boxGeometry args={[1.8125, 8.0625, 0.8125]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* Cylinder HOle */}
      <mesh position={hole1Position} rotation={[Math.PI / 2, 0, 0]}>
        {" "}
        {/* Rotated 90 degrees around the x-axis */}
        <cylinderGeometry args={[holeRadius, holeRadius, holeDepth, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Lever Base */}
      <mesh position={leverBasePosition} rotation={[Math.PI / 2, 0, 0]}>
        {" "}
        {/* Rotated 90 degrees around the x-axis */}
        <cylinderGeometry
          args={[leverBaseRadius, leverBaseRadius, LeverBaseDepth, 32]}
        />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Lever Handle */}
      <mesh position={leverHandlePosition} rotation={[Math.PI / 2, 0, 0]}>
        {" "}
        {/* Rotated 90 degrees around the x-axis */}
        <boxGeometry args={[3.5, 0.35, 0.8125]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
};

export default ETTrim;
