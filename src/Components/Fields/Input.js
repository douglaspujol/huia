import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, label, placeholder, value, onChange, error, onBlur }) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          name={id}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      {error && <span>{error}</span>}
    </>
  );
}

Input.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
Input.defaultProps = {
  value: null,
  label: null,
  error: null,
};

export default Input;
