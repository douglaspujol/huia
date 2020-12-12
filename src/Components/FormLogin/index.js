import React from 'react';
import useForm from '../../Hooks/useForm';
import { Container } from './styles';
import Input from '../Fields/Input';
import Select from '../Fields/Select';

export const options = [
  { option: 'Acre', value: 'AC' },
  { option: 'Alagoas', value: 'AL' },
  { option: 'Amapá', value: 'AP' },
  { option: 'Amazonas', value: 'AM' },
  { option: 'Bahia', value: 'BA' },
  { option: 'Ceará', value: 'CE' },
  { option: 'Distrito Federal', value: 'DF' },
  { option: 'Espírito Santo', value: 'ES' },
  { option: 'Goiás', value: 'GO' },
  { option: 'Maranhão', value: 'MA' },
  { option: 'Mato Grosso', value: 'MT' },
  { option: 'Mato Grosso do Sul', value: 'MS' },
  { option: 'Minas Gerais', value: 'MG' },
  { option: 'Pará', value: 'PA' },
  { option: 'Paraíba', value: 'PB' },
  { option: 'Paraná', value: 'PR' },
  { option: 'Pernambuco', value: 'PE' },
  { option: 'Piauí', value: 'PI' },
  { option: 'Rio de Janeiro', value: 'RJ' },
  { option: 'Rio Grande do Norte', value: 'RN' },
  { option: 'Rio Grande do Sul', value: 'RS' },
  { option: 'Rondônia', value: 'RO' },
  { option: 'Roraima', value: 'RR' },
  { option: 'Santa Catarina', value: 'SC' },
  { option: 'São Paulo', value: 'SP' },
  { option: 'Sergipe', value: 'SE' },
  { option: 'Tocantins', value: 'TO' },
];

function FormLogin() {
  const crm = useForm();
  const uf = useForm();
  function handleSubmit(e) {
    e.preventDefault();
    console.log('asda');
  }
  return (
    <Container>
      <form id="form" onSubmit={handleSubmit}>
        <Input id="crm" label="CRM" placeholder="0000000" {...crm} />
        <Select id="uf" label="UF" options={options} {...uf} />
        <button type="submit">CONTINUE</button>
      </form>
      <span>
        CANAL DE COMRPA EXCLUSIVO <br />
        PARA CLASSE MÉDICA
      </span>
    </Container>
  );
}

export default FormLogin;
