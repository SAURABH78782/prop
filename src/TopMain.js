import React from "react";
import BottomMain from "./BottomMain";

export default function TopMain({ userName }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>TopMain Component</h2>
      <BottomMain userName={userName} />
    </div>
  );
}
