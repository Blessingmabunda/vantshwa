import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#561a59',
    color: '#fff',
    textAlign: 'center',
    padding: '0px',
    width: '100%',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)', // Added shadow for better depth
  };

  const footerContentStyle = {
    margin: '5px 0',
    fontSize: '14px',
    lineHeight: '1.',
  };

  const footerTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <footer style={footerStyle} onClick={() => window.open("https://mabundatech.netlify.app", "_blank")}>
      <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#561a59" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={require("./../../assets/mabunda.png")}
            alt="Logo"
            style={{ height: "25px", width: "25px" }}
          />
        </div>
        <p style={{ fontSize: "16px", fontWeight: "bold", color: "#fff", marginTop: "10px" }}>
          This website was created by Mabunda Tech
        </p>
        <p style={{ fontSize: "14px", fontWeight: "bold", color: "#ededed" }}>
          &copy; Mabunda Tech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
