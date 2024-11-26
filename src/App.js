import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Door from './components/Door';
import Rail from './components/Rail';
import ETTrim from './components/ETTrim';
import Screws from './components/Screws';
import Spindle from './components/Spindle';
import Chassis from './components/Chassis';
import Cover from './components/Cover';

function App() {
  const [visibleObjects, setVisibleObjects] = useState({
    chassis: false,
    cover: false,
    rail: false,
    trim: false,
    screws: false,
    spindle: false,
    hideDoor: false, // Add a new state for hiding/cutting the door
  });

  const handleVisibilityChange = (e) => {
    const { name, checked } = e.target;
    setVisibleObjects((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      {/* Dropdown Menu */}
      <div style={{ width: '20vw', padding: '10px', backgroundColor: '#f4f4f4' }}>
        <h3>Select Components</h3>
        {Object.keys(visibleObjects).map((key) => (
          <div key={key}>
            <label>
              <input
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
      <div style={{ width: '80vw' }}>
        <Canvas camera={{ position: [5, 5, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[54, 10, 5]} intensity={1} />

          {/* Pass the hideDoor state to the Door component */}
          <Door hideDoor={visibleObjects.hideDoor} />

          {/* Conditionally Render Components */}
          {visibleObjects.chassis && <Chassis position={[14, 3, 1]} />}
          {visibleObjects.cover && <Cover position={[14, 3, 1.25]} />}
          {visibleObjects.rail && <Rail position={[-1.5, 3, 1.25]} />}
          {visibleObjects.trim && <ETTrim position={[14, 3, -1]} />}
          {visibleObjects.screws && <Screws position={[14, -0.5, 0]} />}
          {visibleObjects.screws && <Screws position={[14, 6.6875, 0]} />}
          {visibleObjects.spindle && <Spindle position={[14, 2.1875, 0]} />}

          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
