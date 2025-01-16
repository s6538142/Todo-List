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
          // 根據當前排序狀態設置核取方塊的選中狀態
          checked={isSortedByStatus}
          // 當值變化時，更新排序狀態
          onChange={() => setIsSortedByStatus(!isSortedByStatus)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
