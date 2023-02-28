import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import { validInput } from './Mocks/carMocks';

describe('Cadastro de carros [Service]', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Cadastra um novo carro com SUCESSO', async function () {
    // Arrange
    const id = '63319d80feb9f483ee823ac5';
    const output: Car = new Car({ id, ...validInput });

    sinon.stub(Model, 'create').resolves(output);

    // Act
    const service = new CarService();
    const result = await service.create(validInput);

    // Assert
    expect(result).to.be.deep.equal(output);
  });
});