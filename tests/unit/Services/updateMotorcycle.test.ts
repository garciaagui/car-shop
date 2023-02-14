import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes de unidade de atualização do Service de Motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Retorna a moto atualizada com SUCESSO', async function () {
    // Arrange
    const id = '63320b77aa12f0db4f210afe';

    const findOutput = new Motorcycle(
      {
        id,
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30990,
        category: 'Street',
        engineCapacity: 600,
      },
    );

    const updateInput: IMotorcycle = {
      id,
      model: 'Yamaha TT-R230',
      year: 2022,
      color: 'Blue',
      status: true,
      buyValue: 19000,
      category: 'Trail',
      engineCapacity: 230,
    };

    const updateOutput = new Motorcycle(
      { id,
        model: updateInput.model,
        year: updateInput.year,
        color: updateInput.color,
        buyValue: updateInput.buyValue,
        category: updateInput.category,
        engineCapacity: updateInput.engineCapacity,
        status: updateInput.status,
      },
    );

    sinon.stub(Model, 'findOne').resolves(findOutput);
    sinon.stub(Model, 'updateOne').resolves();

    // Act
    const service = new MotorcycleService();
    const result = await service.update(id, updateInput);

    // Assert
    expect(result).to.be.deep.equal(updateOutput);
  });

  it('Retorna uma exceção quando nenhuma moto for encontrada', async function () {
    // Arrange
    const id = '63320b77aa12f0db4f210afe';

    const updateInput: IMotorcycle = {
      id,
      model: 'Yamaha TT-R230',
      year: 2022,
      color: 'Blue',
      status: true,
      buyValue: 19000,
      category: 'Trail',
      engineCapacity: 230,
    };

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'updateOne').resolves();

    // Act
    try {
      const service = new MotorcycleService();
      await service.update(id, updateInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    } 
  });

  it('Retorna uma exceção quando o id for inválido', async function () {
    // Arrange
    const id = 'xxx';

    const updateInput: IMotorcycle = {
      id,
      model: 'Yamaha TT-R230',
      year: 2022,
      color: 'Blue',
      status: true,
      buyValue: 19000,
      category: 'Trail',
      engineCapacity: 230,
    };

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'updateOne').resolves();

    // Act
    try {
      const service = new MotorcycleService();
      await service.update(id, updateInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});