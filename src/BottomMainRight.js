import React from "react";

export default function BottomMainRight({ userName }) {
  return (
    <div style={{ marginLeft: "20px", marginTop: "10px", color: "blue" }}>
      <h4>BottomMainRight Component</h4>
      <p>User's name: <strong>{userName || "No name entered"}</strong></p>
    </div>
  );
}
