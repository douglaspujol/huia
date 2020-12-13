import React from 'react';

function useForm(type) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(state) {
    if (type === false) return true;

    if (state.length === 0) {
      setError('Campo Obrigatório.');
      return false;
    }

    if (type === 'crm' && state.length < 5) {
      setError('Seu CRM precisa ter no mínimo 5 caracteres!');
      return false;
    }

    setError(null);
    return true;
  }
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
export default useForm;
