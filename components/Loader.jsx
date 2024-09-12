import { useState, useEffect } from 'react';
import './Loader.css'; // CSS for the loader

const Loader = ({ progress }) => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="triangle"></div>
        <div className="progress">
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
