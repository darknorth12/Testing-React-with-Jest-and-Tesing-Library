import React, { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : color }}
        disabled={disabled}
        onClick={() => setColor(newButtonColor)}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disable-color-button"
        defaultChecked={disabled}
        aria-checked={disabled}
        onClick={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-color-button">Disable button</label>
    </div>
  );
}

export default App;
