import ICar from '../../../../src/Interfaces/ICar';

const validInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15990,
  doorsQty: 4,
  seatsQty: 5,
};

const validArrInput: ICar[] = [
  {
    id: '63320b77aa12f0db4f210afe',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    buyValue: 15990,
    doorsQty: 4,
    seatsQty: 5,
    status: true,
  },
  {
    id: '63320b77aa12f0db4f210aff',
    model: 'Gol',
    year: 2014,
    color: 'Red',
    buyValue: 20000,
    doorsQty: 4,
    seatsQty: 5,
    status: true,
  },
];

const validUpdateInput: ICar = {
  model: 'Santana',
  year: 1999,
  color: 'Grey',
  buyValue: 10500,
  doorsQty: 4,
  seatsQty: 5,
  status: true,
};

export { validInput, validArrInput, validUpdateInput };