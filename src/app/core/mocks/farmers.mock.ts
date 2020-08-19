import { Farmer } from '../model/Farmer';

const farmers: Farmer[] = [
  {
    id: '1',
    name: 'Rick',
    document: {
      documentNumber: '123.456.789-10',
      documentType: 'cpf',
    },
    address: {
      address: 'Av Paulista 9999',
      country: 'Brazil',
      state: 'São Paulo',
      street: 'Av Paulista',
    },
  },
  {
    id: '2',
    name: 'Sanchez',
    document: {
      documentNumber: '12345678',
      documentType: 'DNI',
    },
    address: {
      address: 'Calle Esmeralda 9999',
      country: 'Argentina',
      state: 'Buenos Aires',
      street: 'Calle Esmeralda',
    },
  }
];

const farmerMock = farmers[0];
const farmersMock = farmers;

export {
  farmerMock,
  farmersMock,
};
