import React from 'react';

const SVRBottomCase = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[2.125,4,1.3125]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default SVRBottomCase;
