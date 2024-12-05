import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ParticlesBackground from "./components/ParticlesBackground"; // Adjust the path as needed
import DarkModeToggle from "./components/DarkModeToggle"; // Import the DarkModeToggle

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
import CVRInnerChassis from "./components/CVRInnerChassis";
import MortiseCase from "./components/MortiseCase";

function App() {
  const [thickness, setThickness] = useState('1.75"');
  const [lockType, setLockType] = useState("CVR");
  const [visibleObjects, setVisibleObjects] = useState({
    Chassis: true,
    "Mortise Case": true,
    "Inner Chassis": true,
    Cover: true,
    Rail: true,
    Trim: true,
    Screws: true,
    Spindle: true,
    "Top Rod": true,
    "Bottom Rod": true,
    "Ghost Door": true,
    "Ghost Frame": true,
  });
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  const thicknessOptions = [
    { value: '1.75"', label: '1-3/4"' },
    { value: '1.875"', label: '1-7/8"' },
    { value: '2.0"', label: '2"' },
    { value: '2.125"', label: '2-1/8"' },
    { value: '2.25"', label: '2-1/4"' },
    { value: '2.375"', label: '2-3/8"' },
    { value: '2.5"', label: '2-1/2"' },
    { value: '2.5625"', label: '2-9/16"' },
    { value: '2.75"', label: '2-3/4"' },
    { value: '3.0"', label: '3"' },
    { value: '3.25"', label: '3-1/4"' },
    { value: '3.375"', label: '3-3/8"' },
    { value: '3.5"', label: '3-1/2"' },
    { value: '3.625"', label: '3-5/8"' },
    { value: '3.75"', label: '3-3/4"' },
    { value: '3.875"', label: '3-7/8"' },
    { value: '4.0"', label: '4"' },
    { value: '4.125"', label: '4-1/8"' },
    { value: '4.25"', label: '4-1/4"' },
    { value: '4.375"', label: '4-3/8"' },
    { value: '4.5"', label: '4-1/2"' },
    { value: '4.75"', label: '4-3/4"' },
    { value: '4.875"', label: '4-7/8"' },
    { value: '5.0"', label: '5"' },
  ];

  const handleLockTypeChange = (e) => setLockType(e.target.value);
  const handleVisibilityChange = (e) => {
    const { name, checked } = e.target;
    setVisibleObjects((prev) => ({ ...prev, [name]: checked }));
  };
  const handleThicknessChange = (e) => setThickness(e.target.value);
  const zOffset = parseFloat(thickness) / 2;

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {/* Hamburger Menu */}
      {!isPanelVisible && (
        <button
          onClick={() => setIsPanelVisible(true)}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 1000,
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "1.2em",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      )}

      {/* Controls Panel */}
      <div
        style={{
          width: isPanelVisible
            ? window.innerWidth >= 1024
              ? "40vw"
              : "70vw"
            : "0",
          overflow: isPanelVisible ? "auto" : "hidden",
          padding: isPanelVisible ? "20px" : "0",
          transition: "all 0.3s ease",
          backgroundColor: "#f9f9f9",
          borderRight: isPanelVisible ? "2px solid #ddd" : "none",
          boxSizing: "border-box",
        }}
      >
        {isPanelVisible && (
          <>
            <button
              onClick={() => setIsPanelVisible(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 1000,
                background: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                fontSize: "1.2em",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
            <h1
              style={{ fontSize: "2.5em", marginBottom: "20px", color: "#333" }}
            >
              Sargent Thick Door Tool
            </h1>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{ fontSize: "1.2em", fontWeight: "bold", color: "#444" }}
              >
                Select Exit Device Type:
                <select
                  value={lockType}
                  onChange={handleLockTypeChange}
                  style={{
                    marginLeft: "10px",
                    padding: "10px",
                    fontSize: "1em",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                  }}
                >
                  <option value="CVR">CVR</option>
                  <option value="SVR">SVR</option>
                  <option value="Mortise">Mortise</option>
                  <option value="Rim">Rim</option>
                </select>
              </label>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{ fontSize: "1.2em", fontWeight: "bold", color: "#444" }}
              >
                Door Thickness:
                <select
                  value={thickness}
                  onChange={handleThicknessChange}
                  style={{
                    marginLeft: "10px",
                    padding: "10px",
                    fontSize: "1em",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                  }}
                >
                  {thicknessOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value} ({option.label})
                    </option>
                  ))}
                </select>
                <PartNumbers thickness={thickness} />
              </label>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "15px",
                fontSize: "1.2em",
              }}
            >
              {Object.keys(visibleObjects).map((key) => (
                <div key={key}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                      color: "#333",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      name={key}
                      checked={visibleObjects[key]}
                      onChange={handleVisibilityChange}
                      style={{
                        marginRight: "10px",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    {key}
                  </label>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <ParticlesBackground />
      <DarkModeToggle />

      {/* 3D Canvas */}
      <div
        style={{
          flex: "1",
          transition: "all 0.3s ease",
          paddingLeft: isPanelVisible ? "0" : "20px",
          width: isPanelVisible ? "30vw" : "100vw",
        }}
      >
        <Canvas camera={{ position: [55, 55, 55] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[54, 10, 5]} intensity={1} />
          <Door
            hideDoor={visibleObjects["Ghost Door"]}
            hideFrame={visibleObjects["Ghost Frame"]}
            thickness={parseFloat(thickness)}
          />
          {visibleObjects["Chassis"] && (
            <Chassis position={[15.25, 0, 0.37 + zOffset]} />
          )}
          {lockType === "Mortise" && visibleObjects["Mortise Case"] && (
            <MortiseCase position={[15.975, 0, 0]} />
          )}
          {lockType === "CVR" && visibleObjects["Inner Chassis"] && (
            <CVRInnerChassis position={[15.25, -1.25, 0]} />
          )}
          {lockType === "CVR" && <CVRTopCase position={[15.25, 39.8, 0]} />}
          {lockType === "CVR" && <CVRTopCase position={[15.25, -39.8, 0]} />}
          {lockType === "SVR" && (
            <SVRTopCase position={[15.25, 39.7, 0.6 + zOffset]} />
          )}
          {lockType === "SVR" && (
            <SVRBottomCase position={[15.25, -39, 0.6 + zOffset]} />
          )}
          {lockType === "CVR" && visibleObjects["Top Rod"] && (
            <CVRRods position={[15.25, 20, 0]} length={36.75} />
          )}
          {lockType === "CVR" && visibleObjects["Bottom Rod"] && (
            <CVRRods position={[15.25, -22, 0]} length={36} />
          )}
          {lockType === "SVR" && visibleObjects["Top Rod"] && (
            <SVRRods position={[15.25, 20, 0.5 + zOffset]} length={36.5} />
          )}
          {lockType === "SVR" && visibleObjects["Bottom Rod"] && (
            <SVRRods position={[15.25, -19, 0.5 + zOffset]} length={36} />
          )}
          {visibleObjects["Cover"] && (
            <Cover position={[15.25, 0, 0.45 + zOffset]} />
          )}
          {visibleObjects["Rail"] && (
            <Rail position={[-1.5, 0, 0.4 + zOffset]} />
          )}
          {visibleObjects["Trim"] && (
            <ETTrim position={[15.25, 0, -0.39 - zOffset]} />
          )}
          {visibleObjects["Screws"] && lockType === "CVR" && (
            <>
              <Screws
                position={[15.25 - 0.65, 3.5, 0.85 + zOffset]}
                thickness={parseFloat(thickness)}
              />
              <Screws
                position={[15.25 + 0.65, -3.275, 0.85 + zOffset]}
                thickness={parseFloat(thickness)}
              />
            </>
          )}
          {visibleObjects["Screws"] && lockType !== "CVR" && (
            <>
              <Screws
                position={[15.25, 3.6875, 0.85 + zOffset]}
                thickness={parseFloat(thickness)}
              />
              <Screws
                position={[15.25, -3.5, 0.85 + zOffset]}
                thickness={parseFloat(thickness)}
              />
            </>
          )}
          {visibleObjects["Spindle"] && (
            <Spindle
              position={[15.25, -1.35, 0.25 + zOffset]}
              thickness={parseFloat(thickness)}
            />
          )}
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
