import React from "react";

const PartNumbers = ({ thickness }) => {
  // Mapping of part numbers based on thickness
  const partNumberMapping = {
    '1.75"': {
      auxScrews: "123-AUX-175\nScrew Type A",
      etScrews: '01-4451 (#1/4-20 x 2.375")',
      spindle: "Cross (P700-8/700-8) = 97-0541\nSquare (P700/700) = 97-0549",
      tailpiece: "Standard = 13-0085",
    },
    '1.875"': {
      auxScrews: "123-AUX-175\nScrew Type A",
      etScrews: '01-4372 (#1/4-20 x 2.625")',
      spindle: "Cross (P700-8/700-8) = 97-0541\nSquare (P700/700) = 97-0550",
      tailpiece: "Standard = 13-0085",
    },
    '2.0"': {
      auxScrews: "123-AUX-200\nScrew Type A",
      etScrews: '01-4372 (#1/4-20 x 2.625")',
      spindle: "Cross (P700-8/700-8): 97-0541\nSquare (P700/700) = 97-0550",
      tailpiece: "Standard = 13-0085",
    },
    '2.125"': {
      auxScrews: "123-AUX-225\nScrew Type B",
      etScrews: '01-4373 (#1/4-20 x 2.875")',
      spindle: "Cross (P700-8/700-8): 97-0541\nSquare (P700/700) = 97-0551",
      tailpiece: "Standard = 13-0085",
    },
    '2.25"': {
      auxScrews: "123-AUX-225\nScrew Type B",
      etScrews: '01-1549 (#1/4-20 x 3.000")',
      spindle: "Cross (P700-8/700-8): 97-0541\nSquare (P700/700) = 97-0551",
      tailpiece: "Standard = 13-0085",
    },
    '2.375"': {
      auxScrews: "123-AUX-225\nScrew Type B",
      etScrews: '01-1549 (#1/4-20 x 3.000")',
      spindle: "Cross (P700-8/700-8): 97-0541\nSquare (P700/700) = 97-0916",
      tailpiece: "Standard = 13-0085",
    },
    '2.5"': {
      auxScrews: "123-AUX-250\nScrew Type B",
      etScrews: '01-1550 (#1/4-20 x 3.250")',
      spindle: "Cross (P700-8/700-8): 97-0918\nSquare (P700/700) = 97-0920",
      tailpiece: 'Special = 3-13/16"',
    },
    '2.5625"': {
      auxScrews: "123-AUX-256\nScrew Type C",
      etScrews: '01-1550 (#1/4-20 x 3.250")',
      spindle: "Cross (P700-8/700-8): 97-0918\nSquare (P700/700) = 97-0921",
      tailpiece: 'Special = 3-13/16"',
    },
    '2.75"': {
      auxScrews: "123-AUX-275\nScrew Type C",
      etScrews: '01-1551 (#1/4-20 x 3.500")',
      spindle: "Cross (P700-8/700-8): 97-0918\nSquare (P700/700) = 97-0921",
      tailpiece: 'Special = 3-13/16"',
    },
    '3.0"': {
      auxScrews: "123-AUX-300\nScrew Type D",
      etScrews: '01-1552 (#1/4-20 x 3.750")',
      spindle: "Cross (P700-8/700-8): 97-0918\nSquare (P700/700) = 97-0922",
      tailpiece: 'Special = 3-13/16"',
    },
    '3.25"': {
      auxScrews: "123-AUX-325\nScrew Type D",
      etScrews: '01-1553 (#1/4-20 x 4.000")',
      spindle: "Cross (P700-8/700-8): 97-0918\nSquare (P700/700) = 97-0923",
      tailpiece: 'Special = 3-13/16"',
    },
    '3.375"': {
      auxScrews: "123-AUX-325\nScrew Type D",
      etScrews: '01-1553 (#1/4-20 x 4.000")',
      spindle: "Cross (P700-8/700-8): 97-0584\nSquare (P700/700) = 97-0924",
      tailpiece: 'Special = 3-13/16"',
    },
    '3.5"': {
      auxScrews: "123-AUX-350\nScrew Type E",
      etScrews: '01-1554 (#1/4-20 x 4.250")',
      spindle: "Cross (P700-8/700-8): 97-0584\nSquare (P700/700) = 97-0924",
      tailpiece: 'Special = 3-13/16"',
    },
    '3.625"': {
      auxScrews: "123-AUX-375\nScrew Type E",
      etScrews: '01-1554 (#1/4-20 x 4.250")',
      spindle: "Cross (P700-8/700-8): 97-0584\nSquare (P700/700) = 97-0925",
      tailpiece: 'Special = 3-13/16"',
    },
    '3.75"': {
      auxScrews: "123-AUX-375\nScrew Type E",
      etScrews: '01-1555 (#1/4-20 x 4.500")',
      spindle: "Cross (P700-8/700-8): 97-0584\nSquare (P700/700) = 97-0925",
      tailpiece: 'Special = 3-13/16"',
    },
    '3.875"': {
      auxScrews: "123-AUX-375\nScrew Type E",
      etScrews: '01-1555 (#1/4-20 x 4.500")',
      spindle: "Cross (P700-8/700-8): 97-0584\nSquare (P700/700) = 97-0925",
      tailpiece: 'Special = 3-13/16"',
    },
    '4.0"': {
      auxScrews: "123-AUX-400\nScrew Type F",
      etScrews: '01-1556 (#1/4-20 x 4.500")',
      spindle: "Cross (P700-8/700-8): 97-0584\nSquare (P700/700) = 97-0583",
      tailpiece: 'Special = 3-13/16"',
    },
    '4.125"': {
      auxScrews: "123-AUX-400\nScrew Type F",
      etScrews: '01-1556 (#1/4-20 x 4.500")',
      spindle: "Cross (P700-8/700-8): 97-0584\nSquare (P700/700) = 97-0926",
      tailpiece: 'Rim Cyl + Tailpiece not available past 4"',
    },
    '4.25"': {
      auxScrews: "123-AUX-425\nScrew Type F",
      etScrews: '01-1557 (#1/4-20 x 5.000")',
      spindle: "Cross (P700-8/700-8): 97-0919\nSquare (P700/700) = 97-0926",
      tailpiece: 'Rim Cyl + Tailpiece not available past 4"',
    },
    '4.375"': {
      auxScrews: "123-AUX-450\nScrew Type G",
      etScrews: '01-1557 (#1/4-20 x 5.000")',
      spindle: "Cross (P700-8/700-8): 97-0919\nSquare (P700/700) = 97-0927",
      tailpiece: 'Rim Cyl + Tailpiece not available past 4"',
    },
    '4.5"': {
      auxScrews: "123-AUX-450\nScrew Type G",
      etScrews: '01-1558 (#1/4-20 x 5.250")',
      spindle: "Cross (P700-8/700-8): 97-0919\nSquare (P700/700) = 97-0927",
      tailpiece: 'Rim Cyl + Tailpiece not available past 4"',
    },
    '4.75"': {
      auxScrews: "123-AUX-475\nScrew Type G",
      etScrews: '01-1559 (#1/4-20 x 5.500")',
      spindle: "Cross (P700-8/700-8): 97-0919\nSquare (P700/700) = 97-0928",
      tailpiece: 'Rim Cyl + Tailpiece not available past 4"',
    },
    '4.875"': {
      auxScrews: "123-AUX-475\nScrew Type G",
      etScrews: '01-1559 (#1/4-20 x 5.500")',
      spindle: "Cross (P700-8/700-8): 97-0919\nSquare (P700/700) = 97-0928",
      tailpiece: 'Rim Cyl + Tailpiece not available past 4"',
    },
    '5.0"': {
      auxScrews: "123-AUX-500\nScrew Type H",
      etScrews: '01-1580 (#1/4-20 x 5.750")',
      spindle: "Cross (P700-8/700-8): 97-0919\nSquare (P700/700) = 97-0929",
      tailpiece: 'Rim Cyl + Tailpiece not available past 4"',
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
