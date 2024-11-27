import React from "react";

const PartNumbers = ({ thickness }) => {
  // Mapping of part numbers based on thickness
  const partNumberMapping = {
    '1.75"': {
      auxScrews: "123-AUX-175",
      etScrews: "456-ET-175",
      spindle: "789-SP-175",
      tailpiece: "101-TP-175",
    },
    '2.0"': {
      auxScrews: "123-AUX-200",
      etScrews: "456-ET-200",
      spindle: "789-SP-200",
      tailpiece: "101-TP-200",
    },
    '2.25"': {
      auxScrews: "123-AUX-225",
      etScrews: "456-ET-225",
      spindle: "789-SP-225",
      tailpiece: "101-TP-225",
    },
    '2.5"': {
      auxScrews: "123-AUX-250",
      etScrews: "456-ET-250",
      spindle: "789-SP-250",
      tailpiece: "101-TP-250",
    },
    '2.5625"': {
      auxScrews: "123-AUX-256",
      etScrews: "456-ET-256",
      spindle: "789-SP-256",
      tailpiece: "101-TP-256",
    },
    '2.75"': {
      auxScrews: "123-AUX-275",
      etScrews: "456-ET-275",
      spindle: "789-SP-275",
      tailpiece: "101-TP-275",
    },
    // Add additional mappings for other thicknesses...
  };

  // Get part numbers for the current thickness
  const parts = partNumberMapping[thickness] || {};

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h3>Part Numbers</h3>
      <ul>
        <li>Aux Screws: {parts.auxScrews || "N/A"}</li>
        <li>ET Screws: {parts.etScrews || "N/A"}</li>
        <li>Spindle: {parts.spindle || "N/A"}</li>
        <li>Tailpiece: {parts.tailpiece || "N/A"}</li>
      </ul>
    </div>
  );
};

export default PartNumbers;
