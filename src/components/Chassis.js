import React from 'react';
import { RoundedBox } from '@react-three/drei';

const Chassis = ({ position }) => {
  return (
    <mesh position={position}>
      {/* Use RoundedBox for rounded corners */}
      <RoundedBox args={[2, 7.875, 0.75]} radius={0.1}>
        <meshStandardMaterial color="gray" />
      </RoundedBox>
    </mesh>
  );
};

export default Chassis;
