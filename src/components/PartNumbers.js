import React from "react";

const PartNumbers = ({ thickness }) => {
  // Mapping of part numbers based on thickness
  const partNumberMapping = {
    '1.75"': {
      auxScrews: "123-AUX-175\nScrew Type A",
      etScrews: "456-ET-175\nExtended Screw",
      spindle: "Cross (P700-8/700-8) = 97-0541\nSquare ()",
      tailpiece: "101-TP-175\nTailpiece Type 1",
    },
    '2.0"': {
      auxScrews: "123-AUX-200\nScrew Type A",
      etScrews: "456-ET-200\nExtended Screw",
      spindle: "Cross (P700-8/700-8): 97-0541",
      tailpiece: "101-TP-200\nTailpiece Type 2",
    },
    '2.25"': {
      auxScrews: "123-AUX-225\nScrew Type B",
      etScrews: "456-ET-225\nExtra Extended Screw",
      spindle: "Cross (P700-8/700-8): 97-0541",
      tailpiece: "101-TP-225\nTailpiece Type 3",
    },
    '2.375"': {
      auxScrews: "123-AUX-225\nScrew Type B",
      etScrews: "456-ET-225\nExtra Extended Screw",
      spindle: "Cross (P700-8/700-8): 97-0541",
      tailpiece: "101-TP-225\nTailpiece Type 3",
    },
    '2.5"': {
      auxScrews: "123-AUX-250\nScrew Type B",
      etScrews: "456-ET-250\nExtra Long Screw",
      spindle: "Cross (P700-8/700-8): 97-0918",
      tailpiece: "101-TP-250\nTailpiece Type 4",
    },
    '2.5625"': {
      auxScrews: "123-AUX-256\nScrew Type C",
      etScrews: "456-ET-256\nPrecision Screw",
      spindle: "Cross (P700-8/700-8): 97-0918",
      tailpiece: "101-TP-256\nTailpiece Type 5",
    },
    '2.75"': {
      auxScrews: "123-AUX-275\nScrew Type C",
      etScrews: "456-ET-275\nHeavy-Duty Screw",
      spindle: "Cross (P700-8/700-8): 97-0918",
      tailpiece: "101-TP-275\nTailpiece Type 6",
    },
    '3.0"': {
      auxScrews: "123-AUX-300\nScrew Type D",
      etScrews: "456-ET-300\nSuper Long Screw",
      spindle: "Cross (P700-8/700-8): 97-0918",
      tailpiece: "101-TP-300\nTailpiece Type 7",
    },
    '3.25"': {
      auxScrews: "123-AUX-325\nScrew Type D",
      etScrews: "456-ET-325\nIndustrial Screw",
      spindle: "Cross (P700-8/700-8): 97-0918",
      tailpiece: "101-TP-325\nTailpiece Type 8",
    },
    '3.375"': {
      auxScrews: "123-AUX-325\nScrew Type D",
      etScrews: "456-ET-325\nIndustrial Screw",
      spindle: "Cross (P700-8/700-8): 97-0584",
      tailpiece: "101-TP-325\nTailpiece Type 8",
    },
    '3.5"': {
      auxScrews: "123-AUX-350\nScrew Type E",
      etScrews: "456-ET-350\nHigh Precision Screw",
      spindle: "Cross (P700-8/700-8): 97-0584",
      tailpiece: "101-TP-350\nTailpiece Type 9",
    },
    '3.75"': {
      auxScrews: "123-AUX-375\nScrew Type E",
      etScrews: "456-ET-375\nExtreme Screw",
      spindle: "Cross (P700-8/700-8): 97-0584",
      tailpiece: "101-TP-375\nTailpiece Type 10",
    },
    '4.0"': {
      auxScrews: "123-AUX-400\nScrew Type F",
      etScrews: "456-ET-400\nMega Screw",
      spindle: "Cross (P700-8/700-8): 97-0584",
      tailpiece: "101-TP-400\nTailpiece Type 11",
    },
    '4.125"': {
      auxScrews: "123-AUX-400\nScrew Type F",
      etScrews: "456-ET-400\nMega Screw",
      spindle: "Cross (P700-8/700-8): 97-0584",
      tailpiece: "101-TP-400\nTailpiece Type 11",
    },
    '4.25"': {
      auxScrews: "123-AUX-425\nScrew Type F",
      etScrews: "456-ET-425\nUltra Long Screw",
      spindle: "Cross (P700-8/700-8): 97-0919",
      tailpiece: "101-TP-425\nTailpiece Type 12",
    },
    '4.5"': {
      auxScrews: "123-AUX-450\nScrew Type G",
      etScrews: "456-ET-450\nHyper Screw",
      spindle: "Cross (P700-8/700-8): 97-0919",
      tailpiece: "101-TP-450\nTailpiece Type 13",
    },
    '4.75"': {
      auxScrews: "123-AUX-475\nScrew Type G",
      etScrews: "456-ET-475\nUltimate Screw",
      spindle: "Cross (P700-8/700-8): 97-0919",
      tailpiece: "101-TP-475\nTailpiece Type 14",
    },
    '5.0"': {
      auxScrews: "123-AUX-500\nScrew Type H",
      etScrews: "456-ET-500\nMax Screw",
      spindle: "Cross (P700-8/700-8): 97-0919",
      tailpiece: "101-TP-500\nTailpiece Type 15",
    },
  };
  

  // Get part numbers for the current thickness
  const parts = partNumberMapping[thickness] || {};

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h3>Part Numbers</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Part</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Part Number
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Aux Screws
            </td>
            <td
              style={{ border: "1px solid #ddd", padding: "8px", whiteSpace: "pre-wrap" }}
            >
              {parts.auxScrews || "N/A"}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Trim Screws
            </td>
            <td
              style={{ border: "1px solid #ddd", padding: "8px", whiteSpace: "pre-wrap" }}
            >
              {parts.etScrews || "N/A"}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Spindle</td>
            <td
              style={{ border: "1px solid #ddd", padding: "8px", whiteSpace: "pre-wrap" }}
            >
              {parts.spindle || "N/A"}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              Tailpiece
            </td>
            <td
              style={{ border: "1px solid #ddd", padding: "8px", whiteSpace: "pre-wrap" }}
            >
              {parts.tailpiece || "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PartNumbers;
