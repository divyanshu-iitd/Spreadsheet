import React, { useEffect, useRef } from "react";

const Cell = ({ row, col, value, isActive, onClick, updateCell }) => {
  const inputRef = useRef(null);

  // Auto-focus active cell
  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  return (
    <input
      ref={inputRef}
      type="text"
      className={`cell ${isActive ? "active" : ""}`}
      value={value}
      onClick={onClick}
      onChange={(e) => updateCell(row, col, e.target.value)}
    />
  );
};

export default Cell;
