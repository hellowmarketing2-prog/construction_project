import React from "react";
const LogoutButton = () => {
  return (
    <button
      className="logout-btn"
      title="Logout"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Door */}
        <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" />

        {/* Logout Arrow */}
        <path d="M14 8l5 4-5 4" />

        <path d="M19 12H9" />
      </svg>
    </button>
  );
};

export default LogoutButton;