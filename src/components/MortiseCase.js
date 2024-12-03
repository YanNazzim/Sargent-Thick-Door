import React from 'react';

const MortiseCase = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[4,5.69,1.125]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default MortiseCase;
