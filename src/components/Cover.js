import React from 'react';

const Cover = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[3,9,1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default Cover;
