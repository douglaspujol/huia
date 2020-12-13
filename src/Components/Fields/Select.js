import React from 'react';
import PropTypes from 'prop-types';

function Select({ id, label, value, onChange, error, onBlur, options }) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <select
          name={id}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          <option value="" disabled>
            Selecione
          </option>
          {options &&
            options.map(option => (
              <option key={option.id} value={option.sigla}>
                {option.nome}
              </option>
            ))}
        </select>
      </label>
      {error && <span>{error}</span>}
    </>
  );
}

Select.propTypes = {
  error: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.bool,
  ]).isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
Select.defaultProps = {
  value: null,
  label: null,
  error: null,
};

export default Select;
