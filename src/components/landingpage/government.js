import React from "react";

const ImageComponent = () => {
  const containerStyle = {
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "8px", // Optional: Add rounded corners if desired
  };

  const imgStyle = {
    maxWidth: "100%", // Ensures the image doesn't overflow
    height: "auto",
  };

  return (
    <div style={containerStyle}>
      <img src={require("./../../assets/logo.png")} alt="Government" style={imgStyle} />
    </div>
  );
};

export default ImageComponent;
