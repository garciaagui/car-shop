import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes de unidade de cadastro do Service de Motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Cadastra uma nova mota com SUCESSO', async function () {
    // Arrange
    const input: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30990,
      category: 'Street',
      engineCapacity: 600,
    };

    const output: Motorcycle = new Motorcycle({
      id: '63319d80feb9f483ee823ac5',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30990,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'create').resolves(output);

    // Act
    const service = new MotorcycleService();
    const result = await service.create(input);

    // Assert
    expect(result).to.be.deep.equal(output);
  });
});