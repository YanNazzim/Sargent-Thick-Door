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
import CVRInnerChassis from "./components/CVRInnerChassis";
import MortiseCase from "./components/MortiseCase";

function App() {
  const [thickness, setThickness] = useState('1.75"');
  const [lockType, setLockType] = useState("CVR");
  const [visibleObjects, setVisibleObjects] = useState({
    chassis: true,
    "Mortise Case": true,
    "Inner Chassis": true,
    cover: true,
    rail: true,
    trim: true,
    screws: true,
    spindle: true,
    "Top Rod": true,
    "Bottom Rod": true,
    "Ghost Door": true,
    "Ghost Frame": true,
  });

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
      <div
        style={{
          width: "35vw",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRight: "2px solid #ddd",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "2.5em", marginBottom: "20px", color: "#333" }}>
          Sargent Thick Door Tool
        </h1>
        <p style={{ fontSize: "1.2em", marginBottom: "30px", color: "#555" }}>
          Developed by <strong>Yan Gonzalez</strong>
        </p>
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
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
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
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
              }}
            >
              {thicknessOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value} ({option.label})
                </option>
              ))}
            </select>
          </label>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
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
                  cursor: "pointer",
                  color: "#333",
                  transition: "color 0.2s",
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
                    border: "2px solid #999",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
                {key}
              </label>
            </div>
          ))}
        </div>
        <PartNumbers thickness={thickness} />
      </div>

      <div style={{ width: "65vw", position: "relative" }}>
        <Canvas camera={{ position: [55, 55, 55] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[54, 10, 5]} intensity={1} />
          <Door
            hideDoor={visibleObjects["Ghost Door"]}
            hideFrame={visibleObjects["Ghost Frame"]}
            thickness={parseFloat(thickness)}
          />
          {visibleObjects.chassis && (
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
          {visibleObjects.cover && (
            <Cover position={[15.25, 0, 0.67 + zOffset]} />
          )}
          {visibleObjects.rail && <Rail position={[-1.5, 0, 0.4 + zOffset]} />}
          {visibleObjects.trim && (
            <ETTrim position={[15.25, 0, -0.39 - zOffset]} />
          )}
          {visibleObjects.screws && lockType === "CVR" && (
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
          {visibleObjects.screws && lockType !== "CVR" && (
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
          {visibleObjects.spindle && (
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
