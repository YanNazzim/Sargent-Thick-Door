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
import SVRBottomCase from "./components/SVRBottomCase";
import CVRRods from "./components/CVRRods";
import SVRRods from "./components/SVRRods";
import PartNumbers from "./components/PartNumbers";

function App() {
  // Default thickness
  const [thickness, setThickness] = useState("1.75\"");

  // Lock type state
  const [lockType, setLockType] = useState("CVR");

  // Visibility state
  const [visibleObjects, setVisibleObjects] = useState({
    chassis: true,
    cover: true,
    rail: true,
    trim: true,
    screws: true,
    spindle: true,
    hideDoor: true,
  });

  // Predefined door thickness options with fractional equivalents
  const thicknessOptions = [
    { value: '1.75"', label: '1-3/4"' },
    { value: '2.0"', label: '2"' },
    { value: '2.25"', label: '2-1/4"' },
    { value: '2.5"', label: '2-1/2"' },
    { value: '2.5625"', label: '2-9/16"' },
    { value: '2.75"', label: '2-3/4"' },
    { value: '3.0"', label: '3"' },
    { value: '3.25"', label: '3-1/4"' },
    { value: '3.5"', label: '3-1/2"' },
    { value: '3.75"', label: '3-3/4"' },
    { value: '4.0"', label: '4"' },
    { value: '4.25"', label: '4-1/4"' },
    { value: '4.5"', label: '4-1/2"' },
    { value: '4.75"', label: '4-3/4"' },
    { value: '5.0"', label: '5"' },
  ];

  const handleLockTypeChange = (e) => {
    setLockType(e.target.value);
  };

  const handleVisibilityChange = (e) => {
    const { name, checked } = e.target;
    setVisibleObjects((prev) => ({ ...prev, [name]: checked }));
  };

  const handleThicknessChange = (e) => {
    setThickness(e.target.value);
  };

  // Calculate dynamic Z-offset (distance from door center to the surface)
  const zOffset = parseFloat(thickness) / 2;

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {/* Controls Panel */}
      <div
        style={{ width: "40vw", padding: "10px", backgroundColor: "#f4f4f4" }}
      >
        <h3>Component Controls</h3>

        {/* Dropdown for Lock Type */}
        <div style={{ marginBottom: "20px" }}>
          <label>
            Select Exit Device Type:{" "}
            <select value={lockType} onChange={handleLockTypeChange}>
              <option value="CVR">CVR</option>
              <option value="SVR">SVR</option>
              <option value="Mortise">Mortise</option>
              <option value="Rim">Rim</option>
            </select>
          </label>
        </div>

        {/* Dropdown for Door Thickness */}
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <label>
            Door Thickness:{" "}
            <select value={thickness} onChange={handleThicknessChange}>
              {thicknessOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value} ({option.label})
                </option>
              ))}
            </select>
          </label>
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

        {/* Part Numbers Section */}
        <PartNumbers thickness={thickness} />
      </div>

      {/* 3D Canvas */}
      <div style={{ width: "60vw", position: "relative" }}>
        <Canvas camera={{ position: [55, 55, 55] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[54, 10, 5]} intensity={1} />
          {/* Door Component */}
          <Door hideDoor={visibleObjects.hideDoor} thickness={parseFloat(thickness)} />
          {/* Other Components with Dynamic Z-offset */}
          {visibleObjects.chassis && (
            <Chassis position={[14, 3, 0.35 + zOffset]} />
          )}
          {lockType === "CVR" && <CVRTopCase position={[14, 39.8, 0]} />}
          {lockType === "SVR" && (
            <SVRTopCase position={[14, 39.7, 0.6 + zOffset]} />
          )}
          {lockType === "SVR" && (
            <SVRBottomCase position={[14, -39, 0.6 + zOffset]} />
          )}
          {lockType === "CVR" && (
            <CVRRods className="CVRRods" position={[14, 22, 0]} />
          )}
          {lockType === "SVR" && (
            <SVRRods className="SVRTopRod" position={[14, 22, 0.5 + zOffset]} />
          )}
          {lockType === "SVR" && (
            <SVRRods
              className="SVRBottomRod"
              position={[14, -18, 0.5 + zOffset]}
            />
          )}
          {visibleObjects.cover && (
            <Cover position={[14, 3, 0.67 + zOffset]} />
          )}
          {visibleObjects.rail && (
            <Rail position={[-1.5, 3, 0.4 + zOffset]} />
          )}
          {visibleObjects.trim && (
            <ETTrim position={[14, 3, -0.39 - zOffset]} />
          )}
          {visibleObjects.screws && (
            <Screws position={[14, -0.5, 1.2 - zOffset]} />
          )}
          {visibleObjects.screws && (
            <Screws position={[14, 6.6875, 1.2 - zOffset]} />
          )}
          {visibleObjects.spindle && (
            <Spindle position={[14, 2.1875, 1.2 - zOffset]} />
          )}
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
          Current Thickness: {thickness} (
          {thicknessOptions.find((opt) => opt.value === thickness)?.label})
        </div>
      </div>
    </div>
  );
}

export default App;
