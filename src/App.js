import React from "react";
import "./App.css";
import CardContainer from "./components/card_container/card_container";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="app">
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
