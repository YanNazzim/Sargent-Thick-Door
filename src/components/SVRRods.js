import React from 'react';

const SVRRods = ({ position }) => {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.3, 0.3, 38, 32]} /> {/* radiusTop, radiusBottom, height, radialSegments */}
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default SVRRods;
