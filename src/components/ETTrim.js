import React from 'react';

const ETTrim = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1.8125,8.0625,0.8125]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default ETTrim;
