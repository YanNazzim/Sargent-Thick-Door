import React from 'react';

const CVRInnerChassis = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[2,7.875,.75]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default CVRInnerChassis;
