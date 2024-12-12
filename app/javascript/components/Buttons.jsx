import React from "react";

export const PrimaryButton = ({ type, action, text }) => {
  return (
    <button
      type={type}
      onClick={action}
      className="px-4 py-2 border-0 rounded-pill bg-white text-primary fw-bold"
    >
      {text}
    </button>
  );
};

export const PrimaryButtonReverse = ({ type, action, text }) => {
    return (
      <button
        type={type}
        onClick={action}
        className="px-4 py-2 border-0 rounded-pill bg-primary text-white fw-bold"
      >
        {text}
      </button>
    );
  };

export const LinkButton = ({ text, action }) => {
  return (
    <button type="submit" onClick={action} className="btn btn-link p-0 m-0 text-white">
      {text}
    </button>
  );
};
