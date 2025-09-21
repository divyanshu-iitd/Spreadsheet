import React, { useState } from "react";
import Grid from "./components/Grid";
import Toolbar from "./components/Toolbar";
import "./App.css";

function App() {
  const rows = 50; // increase rows
  const cols = 25; // increase columns

  const [data, setData] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(""))
  );

  const [activeCell, setActiveCell] = useState({ row: 0, col: 0 });

  const updateCell = (row, col, value) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  return (
    <div className="app">
      <h1>📊 React Spreadsheet</h1>
      <Toolbar />
      <div className="spreadsheet-container">
        <Grid
          rows={rows}
          cols={cols}
          data={data}
          activeCell={activeCell}
          setActiveCell={setActiveCell}
          updateCell={updateCell}
        />
      </div>
    </div>
  );
}

export default App;
