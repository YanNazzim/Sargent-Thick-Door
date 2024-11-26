import React from 'react';

const ETTrim = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1.8125,8.0625,1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default ETTrim;
