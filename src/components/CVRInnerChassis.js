import React from 'react';

const CVRInnerChassis = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[.775,5.125,1.325]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default CVRInnerChassis;
