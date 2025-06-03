import React from "react";
import BottomMainRight from "./BottomMainRight";

export default function BottomMain({ userName }) {
  return (
    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
      <h3>BottomMain Component</h3>
      <BottomMainRight userName={userName} />
    </div>
  );
}

