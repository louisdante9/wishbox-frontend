import React from "react";

const Button = ({ type, className, onSubmit, disabled, text}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onSubmit}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;