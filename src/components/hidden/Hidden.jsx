import React, { useState, useEffect } from 'react';
import './Hidden.css';

const HiddenElement = ({ visible, hideIt }) => {
  const [bgColor, setBgColor] = useState('white');
  const [borderColor, setBorderColor] = useState('blue');

  useEffect(() => {
    const box = document.querySelector('.hidden-box');
    if (box) {
      box.style.setProperty('--bg-color', bgColor);
      box.style.setProperty('--border-color', borderColor);
    }
  }, [bgColor, borderColor]);

  return (
    <div className={`hidden-box ${visible ? 'visible' : ''}`}>
      <div className="card text-white bg-gradient-primary p-3 mb-3">
        <div className="d-flex align-items-center mb-2">
          <div className="icon-box me-3">
            <i className="bi bi-lightbulb-fill fs-4"></i>
          </div>
          <div>
            <h5 className="mb-0 fw-bold">Quick Tip</h5>
            <small>UI Helper Box</small>
          </div>
        </div>
        <p className="mb-2">
          You can use this space to show hints, shortcuts, or system messages.
        </p>
        <button className="btn btn-sm btn-light fw-semibold" onClick={hideIt}>
          Hide It
        </button>
      </div>

      {/* Background Changer Card */}
      <div className="card text-dark bg-light p-3 mb-3">
        <h6 className="fw-semibold mb-2">🎨 Change Background</h6>
        <div className="d-flex gap-2">
          <button
            id='bg-black'
            className="btn btn-sm btn-dark"
            onClick={() => setBgColor('black')}
          >
            Black
          </button>
          <button
            id='bg-white'
            className="btn btn-sm btn-outline-dark"
            onClick={() => setBgColor('white')}
          >
            White
          </button>
        </div>
      </div>

      {/* Border Changer Card */}
      <div className="card text-dark bg-light p-3">
        <h6 className="fw-semibold mb-2">🎯 Change Border Color</h6>
        <div className="d-flex gap-2">
          <button
            id="blue-border"
            className="btn btn-sm btn-primary"
            onClick={() => setBorderColor('blue')}
          >
            Blue Border
          </button>
          <button
            id='green-border'
            className="btn btn-sm btn-success"
            onClick={() => setBorderColor('green')}
          >
            Green Border
          </button>
        </div>
      </div>
    </div>
  );
};

export default HiddenElement;
