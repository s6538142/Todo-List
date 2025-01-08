import React from 'react';
import './css/ProgressBar.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      {/* 只顯示百分比標籤 */}
      <div className="progress-label">
        {percentage}%
      </div>
      <div className="progress-bar">
        <div
          className="progress-completed"
          style={{ width: `${percentage}%` }}
        ></div>
        <div
          className="progress-remaining"
          style={{ width: `${100 - percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
