import React from 'react';

const Spindle = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[.34375,.34375,2.375]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default Spindle;
