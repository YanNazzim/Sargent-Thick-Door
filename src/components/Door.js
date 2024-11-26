import React from 'react';

const Door = ({ hideDoor }) => {
  return (
    <group>
      {/* Full Door */}
      {!hideDoor && (
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[36, 84, 1.75]} /> {/* Dimensions: 36x84x1.75 inches */}
          <meshStandardMaterial color="brown" />
        </mesh>
      )}

      {/* Door with Cutout */}
      {hideDoor && (
        <>
          {/* Main Door */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[36, 84, 1.75]} />
            <meshStandardMaterial
              color="brown"
              transparent
              opacity={0.8} // Optional transparency for the door
            />
          </mesh>

          {/* Invisible Cutout */}
          <mesh position={[-6, 0, 0]} castShadow>
            <boxGeometry args={[30, 84, 1.75]} /> {/* Dimensions of the cutout */}
            <meshStandardMaterial
              color="brown"
              transparent
              opacity={1} // Make the cutout fully transparent
              depthWrite={false} // Avoid visual artifacts with transparency
            />
          </mesh>
        </>
      )}
    </group>
  );
};

export default Door;
