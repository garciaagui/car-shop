import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

const validInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30990,
  category: 'Street',
  engineCapacity: 600,
};

const validArrInput: IMotorcycle[] = [
  {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30990,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    model: 'Yamaha TT-R230',
    year: 2022,
    color: 'Blue',
    buyValue: 19000,
    category: 'Trail',
    engineCapacity: 230,
  },
];

const validUpdateInput: IMotorcycle = {
  model: 'Yamaha TT-R230',
  year: 2022,
  color: 'Blue',
  status: true,
  buyValue: 19000,
  category: 'Trail',
  engineCapacity: 230,
};

export { validInput, validArrInput, validUpdateInput };