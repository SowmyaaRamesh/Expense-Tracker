import React from "react";

export const ToggleButton = ({ theme, toggleTheme }) => {
  return (
    <div>
      <label class="switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};
