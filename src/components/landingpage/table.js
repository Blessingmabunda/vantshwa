import React, { useState } from "react";

const ProofreadingPricing = () => {
  const pricingData = [
    { pages: 140, price: "R600" },
    { pages: 150, price: "R700" },
    { pages: 160, price: "R750" },
    { pages: 170, price: "R800" },
    { pages: 180, price: "R850" },
    { pages: 190, price: "R900" },
    { pages: 200, price: "R950" },
    { pages: 210, price: "R1000" },
    { pages: 220, price: "R1050" },
    { pages: 230, price: "R1100" },
    { pages: 240, price: "R1150" },
    { pages: 250, price: "R1200" },
    { pages: 260, price: "R1250" },
    { pages: 270, price: "R1300" },
    { pages: 280, price: "R1350" },
    { pages: 290, price: "R1400" },
    { pages: 300, price: "R1450" },
  ];

  const [visibleRows, setVisibleRows] = useState(5); // Default to show first 5 rows

  // Function to handle dropdown selection
  const handleRowsChange = (event) => {
    setVisibleRows(Number(event.target.value));
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Proofreading Price List</h2>
      <p className="pricing-description">
        At Flair Concepts & Media, we proofread manuscripts before you take your
        book in for print production.
      </p>
      
      <table className="pricing-table">
        <thead>
          <tr className="pricing-header">
            <th className="pricing-header-cell">Number of Pages</th>
            <th className="pricing-header-cell">Price (ZAR)</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.slice(0, visibleRows).map((item, index) => (
            <tr key={index} className={`pricing-row ${index % 2 === 0 ? "even" : "odd"}`}>
              <td className="pricing-cell">{item.pages}</td>
              <td className="pricing-cell">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Dropdown to select how many rows to show */}
      <div className="dropdown-container">
        <label htmlFor="row-selection" className="dropdown-label">
          Show more rows:
        </label>
        <select
          id="row-selection"
          className="dropdown-select"
          onChange={handleRowsChange}
          value={visibleRows}
        >
          <option value={5}>5 rows</option>
          <option value={10}>10 rows</option>
          <option value={15}>15 rows</option>
          <option value={pricingData.length}>Show all</option>
        </select>
      </div>


      <style jsx>{`
        /* Container styling */
        .pricing-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 24px;
          background-color: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }

        /* Title styling */
        .pricing-title {
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 16px;
        }

        /* Description text styling */
        .pricing-description {
          color: #4A5568;
          text-align: center;
          margin-bottom: 24px;
        }

        /* Table styling */
        .pricing-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          overflow: hidden;
        }

        /* Header styling */
        .pricing-header {
          background-color: #892A8D;
          color: #fff;
        }

        .pricing-header-cell {
          padding: 12px;
          border: 1px solid #E2E8F0;
          text-align: center;
        }

        /* Row styling for odd and even rows */
        .pricing-row.odd {
          background-color: #F7FAFC;
        }

        .pricing-row.even {
          background-color: #EDF2F7;
        }

        /* Cell styling */
        .pricing-cell {
          padding: 12px;
          border: 1px solid #E2E8F0;
          text-align: center;
        }

        /* Dropdown styling */
        .dropdown-container {
          margin-top: 16px;
          text-align: center;
        }

        .dropdown-label {
          font-weight: bold;
          margin-right: 8px;
        }

        .dropdown-select {
          padding: 8px;
          font-size: 1rem;
          border-radius: 4px;
          border: 1px solid #E2E8F0;
        }
      `}</style>
    </div>
  );
};

export default ProofreadingPricing;
