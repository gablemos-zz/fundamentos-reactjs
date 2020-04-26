import { parseISO, format } from 'date-fns';

// const formatDate = (value: Date): string =>
//   Intl.DateTimeFormat('pt-BR').format(parseISO(String(value)));

const formatDate = (value: Date): string =>
  format(parseISO(String(value)), 'dd/MM/yyyy');

export default formatDate;
