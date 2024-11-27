import React from 'react';

const Door = ({ hideDoor }) => {
  return (
    <group>
      {/* Full Door */}
      {!hideDoor && (
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[36, 84, 1.75]} /> {/* Dimensions: 36x84x1.75 inches */}
          <meshStandardMaterial color="Black" />
        </mesh>
      )}

      {/* Door with Cutout */}
      {hideDoor && (
        <>
          {/* Main Door */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[36, 84, 1.75]} />
            <meshStandardMaterial
              color="Gray"
              transparent
              opacity={0.5} // Optional transparency for the door
            />
          </mesh>


        </>
      )}
    </group>
  );
};

export default Door;
