import React from "react";

export const PrimaryButton = ({ type = "button", action, text }) => {
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

export const PrimaryButtonReverse = ({ type = "button", action, text }) => {
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

export const LinkButton = ({ type = "button", text, action }) => {
  return (
    <button
      type={type}
      onClick={action}
      className="btn btn-link p-0 m-0 text-white"
    >
      {text}
    </button>
  );
};
