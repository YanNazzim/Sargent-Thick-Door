import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Chassis = ({ position }) => {
  // Load the base chassis model
  const Chassis8800 = useLoader(GLTFLoader, "/models/ChassisBlank.gltf");
  const Latchbolt8800 = useLoader(GLTFLoader, "/models/Latchbolt8800.gltf");
  const Latchbolt8800SpringPin = useLoader(
    GLTFLoader,
    "/models/Latchbolt8800SpringPin.gltf"
  );
  const Latchbolt8800SpirolPin = useLoader(
    GLTFLoader,
    "/models/latchboltSpirolPin.gltf"
  );
  const Latchbolt8800PivotPin = useLoader(
    GLTFLoader,
    "/models/leverpivotpin.gltf"
  );
  const LiftLeverRH8800 = useLoader(GLTFLoader, "/models/liftleverRH.gltf");
  const LiftLeverLH8800 = useLoader(GLTFLoader, "/models/liftleverLH.gltf");
  const LatchboltSpring8800 = useLoader(
    GLTFLoader,
    "/models/latchboltspring.gltf"
  );
  const LatchboltSpringGroovepin8800 = useLoader(
    GLTFLoader,
    "/models/LBSpringGroovepin.gltf"
  );
  const OutsideCylHub8800 = useLoader(
    GLTFLoader,
    "/models/Cylinderspindlehub8800.gltf"
  );
  const SecondOutsideCylHub8800 = useLoader(
    GLTFLoader,
    "/models/Cylinderspindlehub8800 Second.gltf"
  );

  return (
    <group position={position}>
      {/* 8800 Chassis */}
      <primitive
        rotation={[Math.PI, Math.PI, 0]} // Default no rotation
        object={Chassis8800.scene}
        position={[0, 41, -0.375]} // Adjust as necessary
        scale={[30, 30, 30]} // Adjust scale to match your scene
      />
      <primitive
        rotation={[Math.PI / 2, Math.PI, (3 * 2*Math.PI/2) / 2 + 0.9]} // Default no rotation
        object={Latchbolt8800.scene}
        position={[0, 41, 0]} // Adjust as necessary
        scale={[30, 30, 30]} // Adjust scale to match your scene
      />
      ))
    </group>
  );
};

export default Chassis;
