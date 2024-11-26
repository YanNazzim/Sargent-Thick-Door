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
    chassis: true,
    cover: true,
    rail: true,
    trim: true,
    screws: true,
    spindle: true,
    hideDoor: true, // Add a new state for hiding/cutting the door
  });

  const handleVisibilityChange = (e) => {
    const { name, checked } = e.target;
    setVisibleObjects((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      {/* Dropdown Menu */}
      <div style={{ width: '40vw', padding: '10px', backgroundColor: '#f4f4f4' }}>
        <h3>Select Components</h3>
        {Object.keys(visibleObjects).map((key) => (
          <div key={key}>
            <label className='label'>
              <input
              className='checkbox'
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
      <div style={{ width: '60vw' }}>
        <Canvas camera={{ position: [55, 55, 55] }}>
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
