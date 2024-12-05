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
    Rail: true,
    Trim: true,
    Screws: true,
    Spindle: true,
    Chassis: true,
    "Chassis Cover": true,
    "Mortise Case": true,
    "Inner Chassis": true,
    "Top Rod": true,
    "Bottom Rod": true,
    "Ghost Door": true,
    "Ghost Frame": true,
  });
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  // Define isDarkMode state
  const [isDarkMode, setIsDarkMode] = useState(false);

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
            top: "20px",
            left: "20px",
            zIndex: 1000,
            background: isDarkMode ? "#333" : "#aaaaaa",
            color: isDarkMode ? "#fff" : "black", // White or dark text for contrast
            border: "none", // Remove border
            borderRadius: "50%", // Circular button
            padding: "15px",
            fontSize: "1.5em",
            fontWeight: "bolder",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.3s ease", // Smooth transition on hover
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Hover effect
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          ☰
        </button>
      )}

      {/* Controls Panel */}
      <div
        style={{
          width: isPanelVisible
            ? window.innerWidth >= 1024
              ? "30vw"
              : "60vw"
            : "0",
          overflow: isPanelVisible ? "auto" : "hidden",
          padding: isPanelVisible ? "25px" : "0",
          transition: "all 0.3s ease-in-out",
          backgroundColor: isDarkMode ? "#1e1e1e" : "#f4f4f4", // Darker background in dark mode
          color: isDarkMode ? "#f4f4f4" : "#333", // Lighter text in dark mode
          borderRight: isPanelVisible ? "2px solid #444" : "none", // Darker border
          boxSizing: "border-box",
          boxShadow:
            isPanelVisible && isDarkMode
              ? "4px 0 8px rgba(0, 0, 0, 0.5)"
              : "none", // Shadow for panel in dark mode
        }}
      >
        {isPanelVisible && (
          <>
            <button
              onClick={() => setIsPanelVisible(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                zIndex: 1000,
                background: isDarkMode ? "#333" : "#aaaaaa",
                color: isDarkMode ? "#fff" : "black", // White or dark text for contrast
                border: "none",
                borderRadius: "50%",
                padding: "15px",
                fontSize: "1.5em",
                cursor: "pointer",
                transition: "background 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              ✖
            </button>

            <h1 style={{ fontSize: "2.5em", marginBottom: "20px" }}>
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
                    backgroundColor: isDarkMode ? "#333" : "#fff", // Consistent background color
                    color: isDarkMode ? "#fff" : "#333", // Consistent text color
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
                    backgroundColor: isDarkMode ? "#333" : "#fff", // Consistent background color
                    color: isDarkMode ? "#fff" : "#333", // Consistent text color
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
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

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
          <directionalLight position={[54, 10, 5]} intensity={1.5} />
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
          {visibleObjects["Chassis Cover"] && (
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
