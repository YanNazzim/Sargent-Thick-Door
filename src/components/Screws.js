import React from 'react';

const Screws = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[.22,.22,2.375]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default Screws;
