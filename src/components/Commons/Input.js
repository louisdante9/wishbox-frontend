import React from 'react';

const Input = ({type, label, className, placeholder, onChange, text, name}) => {
    return (
      <>
        <label className={label} htmlFor={name}>
          {text}
        </label>
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </>
    );
}

export default Input