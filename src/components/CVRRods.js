import React from 'react';

const Rods = ({ position }) => {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.3, 0.3, 32, 32]} /> {/* radiusTop, radiusBottom, height, radialSegments */}
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default Rods;
