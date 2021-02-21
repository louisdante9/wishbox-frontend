import React from "react";

const Button = ({ type, className, onSubmit, disabled, children }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onSubmit}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;