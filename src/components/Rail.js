import React from 'react';

const Rail = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[31,2.6,1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default Rail;
