import React from 'react';
import useForm from '../../Hooks/useForm';
import { Container } from './styles';
import Input from '../Fields/Input';
import Select from '../Fields/Select';

function FormLogin() {
  const crm = useForm('crm');
  const uf = useForm();
  const [disabled, setDisabled] = React.useState(false);
  const [options, setOptions] = React.useState(false);

  React.useEffect(() => {
    async function getState() {
      const response = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      );
      const result = await response.json();
      setOptions(result);
    }
    getState();
  }, []);

  function simulation() {
    // eslint-disable-next-line no-alert
    alert('Sucesso!');
    setDisabled(false);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!(crm.validate() && uf.validate())) {
      return;
    }
    setDisabled(true);
    setTimeout(() => simulation(), 1500);
  }

  return (
    <Container>
      <form id="form" onSubmit={handleSubmit}>
        <Input id="crm" label="CRM" placeholder="0000000" {...crm} />
        <Select id="uf" label="UF" options={options} {...uf} />
        <button type="submit" disabled={disabled}>
          {disabled ? 'Carregando...' : 'CONTINUE'}
        </button>
      </form>
      <span>
        CANAL DE COMRPA EXCLUSIVO <br />
        PARA CLASSE MÉDICA
      </span>
    </Container>
  );
}

export default FormLogin;
