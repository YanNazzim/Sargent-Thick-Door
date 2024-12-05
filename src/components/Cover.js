import React from 'react';
import { RoundedBox } from '@react-three/drei';

const Cover = ({ position }) => {
  return (
    <mesh position={position}>
      <RoundedBox args={[2.2, 8.375, 0.95]} radius={.1}>
      <meshStandardMaterial color="gray" />
      </RoundedBox>
    </mesh>
  );
};

export default Cover;
