import React from "react";

// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

const NumberComponents = ({ number, status, click }) => {
  const handleClick = () => {
    click(number, status);
  };

  return (
    <button
      onClick={handleClick}
      className="number"
      style={{ backgroundColor: colors[status] }}
    >
      {number}
    </button>
  );
};

export default NumberComponents;
