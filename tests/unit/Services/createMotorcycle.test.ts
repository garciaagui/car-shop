import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { validInput } from './Mocks/motorcycleMocks';

describe('Testes de unidade de cadastro do Service de Motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Cadastra uma nova mota com SUCESSO', async function () {
    // Arrange
    const id = '63319d80feb9f483ee823ac5';
    const output = new Motorcycle({ id, ...validInput });

    sinon.stub(Model, 'create').resolves(output);

    // Act
    const service = new MotorcycleService();
    const result = await service.create(validInput);

    // Assert
    expect(result).to.be.deep.equal(output);
  });
});