import React, { useEffect } from "react";
import Cell from "./Cell";

// Excel columns helper
function getColumnName(index) {
  return String.fromCharCode(65 + index); // 0 → A, 25 → Z
}

function Grid({ rows = 50, cols = 26, data, activeCell, setActiveCell, updateCell }) {
  // Arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      let { row, col } = activeCell;
      if (e.key === "ArrowUp") row = Math.max(row - 1, 0);
      if (e.key === "ArrowDown") row = Math.min(row + 1, rows - 1);
      if (e.key === "ArrowLeft") col = Math.max(col - 1, 0);
      if (e.key === "ArrowRight") col = Math.min(col + 1, cols - 1);
      setActiveCell({ row, col });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCell, rows, cols, setActiveCell]);

  return (
    <div className="spreadsheet-container">
      <div className="grid-wrapper">
        {/* Column headers */}
        <div className="column-headers">
          <div className="corner"></div>
          {Array.from({ length: cols }).map((_, colIdx) => (
            <div key={colIdx} className="header-cell">
              {getColumnName(colIdx)}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="rows">
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <div key={rowIdx} className="row">
              {/* Row header */}
              <div className="header-cell">{rowIdx + 1}</div>

              {/* Cells */}
              {Array.from({ length: cols }).map((_, colIdx) => (
                <Cell
                  key={colIdx}
                  row={rowIdx}
                  col={colIdx}
                  value={data[rowIdx][colIdx]}
                  isActive={activeCell.row === rowIdx && activeCell.col === colIdx}
                  onClick={() => setActiveCell({ row: rowIdx, col: colIdx })}
                  updateCell={updateCell}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grid;
