import React from "react";

// Spindle component to render different spindle geometries (Square and Cross)
const Spindle = ({ type, position, thickness }) => {
  // Function to render spindle geometry based on its type (Square or Cross)
  const renderSpindleGeometry = () => {
    switch (type) {
      case "Square":
        // Render square spindle (1x1xthickness)
        return (
          <mesh>
            <boxGeometry args={[1, 1, thickness]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        );
        
      case "Cross":
        // Render cross spindle (combination of two box geometries)
        return (
          <group>
            <mesh>
              <boxGeometry args={[0.5, 1.5, thickness]} />
              <meshStandardMaterial color="red" />
            </mesh>
            <mesh>
              <boxGeometry args={[1.5, 0.5, thickness]} />
              <meshStandardMaterial color="red" />
            </mesh>
          </group>
        );
        
      default:
        // Return null if the spindle type is unknown
        return null;
    }
  };

  return (
    // Group that allows positioning the spindle in 3D space
    <group position={position}>
      {renderSpindleGeometry()}
    </group>
  );
};

export default Spindle;
