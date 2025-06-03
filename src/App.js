import React, { useState } from "react";
import TopMain from "./bottomMain";


export default function App() {
  const [userName, setUserName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Props Drilling Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <TopMain userName={userName} />
    </div>
  );
}