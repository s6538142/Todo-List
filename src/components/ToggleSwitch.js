import React from 'react';
import './css/ToggleSwitch.css';

const ToggleSwitch = ({ isSortedByStatus, setIsSortedByStatus }) => {
  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <span className="toggle-text">
        Move done things to end ?
        </span>
        <input
          type="checkbox"
          checked={isSortedByStatus}
          onChange={() => setIsSortedByStatus(!isSortedByStatus)}
        />
        <span className="slider"></span>

      </label>
    </div>
  );
};

export default ToggleSwitch;
