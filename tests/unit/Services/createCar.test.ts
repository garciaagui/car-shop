import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testes de unidade de cadastro do Service de Car', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Cadastra um novo veículo com SUCESSO', async function () {
    // Arrange
    const input: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const output: Car = new Car({
      id: '63319d80feb9f483ee823ac5',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(output);

    // Act
    const service = new CarService();
    const result = await service.create(input);

    // Assert
    expect(result).to.be.deep.equal(output);
  });
});