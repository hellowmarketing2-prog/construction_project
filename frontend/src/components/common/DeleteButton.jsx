import React from "react";

const DeleteButton = () => {
  return (
    <button
      className="delete-btn"
      title="Delete Project"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Bin top */}
        <path d="M3 6h18" />

        {/* Bin handle */}
        <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />

        {/* Bin body */}
        <path d="M19 6l-1 15H6L5 6" />

        {/* Inner lines */}
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </svg>
    </button>
  );
};

export default DeleteButton;