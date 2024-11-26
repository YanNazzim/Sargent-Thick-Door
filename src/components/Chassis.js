import React from 'react';

const Chassis = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[2.625,8.375,.75]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default Chassis;
