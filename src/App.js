import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Door from "./components/Door";
import Rail from "./components/Rail";
import ETTrim from "./components/ETTrim";
import Screws from "./components/Screws";
import Spindle from "./components/Spindle";
import Chassis from "./components/Chassis";
import Cover from "./components/Cover";
import CVRTopCase from "./components/CVRTopCase";
import SVRTopCase from "./components/SVRTopCase";
import Rods from "./components/Rods";

function App() {
  const [thickness, setThickness] = useState(1.75); // Default door thickness

  const [lockType, setLockType] = useState("CVR");
  const [visibleObjects, setVisibleObjects] = useState({
    chassis: true,
    cover: true,
    rail: true,
    trim: true,
    screws: true,
    spindle: true,
    hideDoor: true,
  });

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setLockType(value);
  };

  const handleVisibilityChange = (e) => {
    const { name, checked } = e.target;
    setVisibleObjects((prev) => ({ ...prev, [name]: checked }));
  };

  const handleThicknessChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setThickness(value);
    }
  };

  // Calculate dynamic Z-offset (distance from door center to the surface)
  const zOffset = thickness / 2;

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {/* Controls Panel */}
      <div style={{ width: "40vw", padding: "10px", backgroundColor: "#f4f4f4" }}>
        <h3>Component Controls</h3>

        {/* Dropdown for Lock Type */}
        <div style={{ marginBottom: "20px" }}>
          <label>
            Select Exit Device Type:{" "}
            <select value={lockType} onChange={handleDropdownChange}>
              <option value="CVR">CVR</option>
              <option value="SVR">SVR</option>
              <option value="Mortise">Mortise</option>
              <option value="Rim">Rim</option>
            </select>
          </label>
        </div>

        {/* Thickness Control */}
        <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <label>
            Door Thickness (1.75" - 5"):
            <input
              type="number"
              step="0.01"
              min="1.75"
              max="5"
              value={thickness}
              onChange={handleThicknessChange}
              style={{ marginLeft: "10px", width: "100px" }}
            />
          </label>
          {thickness > 5 && <p style={{ color: "red" }}>Door thickness exceeds maximum available!</p>}
        </div>

        {/* Visibility Checkboxes */}
        {Object.keys(visibleObjects).map((key) => (
          <div key={key}>
            <label className="label">
              <input
                className="checkbox"
                type="checkbox"
                name={key}
                checked={visibleObjects[key]}
                onChange={handleVisibilityChange}
              />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          </div>
        ))}
      </div>

      {/* 3D Canvas */}
      <div style={{ width: "60vw", position: "relative" }}>
        <Canvas camera={{ position: [55, 55, 55] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[54, 10, 5]} intensity={1} />

          {/* Door Component */}
          <Door hideDoor={visibleObjects.hideDoor} thickness={thickness} />

          {/* Other Components with Dynamic Z-offset */}
          {visibleObjects.chassis && <Chassis position={[14, 3, .37 + zOffset]} />} {/* Adjusted */}
          {lockType === "CVR" && <CVRTopCase position={[14, 39.8, 0]} />} {/* Adjusted */}
          {lockType === "SVR" && <SVRTopCase position={[14, 39.7, .6 + zOffset]} />} {/* Adjusted */}
          {lockType === "SVR" && <SVRTopCase position={[14, -39, 1.5 + zOffset]} />} {/* Adjusted */}
          {lockType === "CVR" && <Rods className="CVRRods" position={[14, 22, 0]} />} {/* Adjusted */}
          {lockType === "SVR" && <Rods className="SVRRods" position={[14, 22, .5 + zOffset]} />} {/* Adjusted */}
          {visibleObjects.cover && <Cover position={[14, 3, .67 + zOffset]} />} {/* Adjusted */}
          {visibleObjects.rail && <Rail position={[-1.5, 3, .4 + zOffset]} />} {/* Adjusted */}
          {visibleObjects.trim && <ETTrim position={[14, 3, -.39 - zOffset]} />}
          {visibleObjects.screws && <Screws position={[14, -0.5, 1.2 - zOffset]} />} {/* Adjusted */}
          {visibleObjects.screws && <Screws position={[14, 6.6875, 1.2 - zOffset]} />} {/* Adjusted */}
          {visibleObjects.spindle && <Spindle position={[14, 2.1875, 1.2 - zOffset]} />} {/* Adjusted */}

          <OrbitControls />
        </Canvas>

        {/* Thickness Display */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            padding: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
            fontSize: "14px",
          }}
        >
          Current Thickness: {thickness.toFixed(2)}"
        </div>
      </div>
    </div>
  );
}

export default App;
