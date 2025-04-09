import React from 'react';
import './Modal.css';

const ModalForm = ({ onCloseModal }) => {
  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-content shadow-lg rounded-4 animate-fade-in">
        <div className="modal-header bg-dark text-white border-bottom-0">
          <h5 className="modal-title fw-semibold">📝 Demo Form</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={onCloseModal}
          ></button>
        </div>
        <div className="modal-body px-4 pt-3 pb-4">
          <form
            id="demo-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('🚫 Demo only – nothing submitted.');
            }}
          >
            <div id="name" className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
              />
            </div>
            <div id="email" className="mb-4">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <button id="sub-btn" className="btn btn-primary w-100 py-2 fs-5" type="submit">
              🚀 Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
