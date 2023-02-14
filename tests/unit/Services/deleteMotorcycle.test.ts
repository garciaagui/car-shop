import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes de unidade de exclusão do Service de Motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Exclui uma moto pelo ID com SUCESSO', async function () {
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

    sinon.stub(Model, 'findOne').resolves(findOutput);
    sinon.stub(Model, 'deleteOne').resolves();

    // Act
    const service = new MotorcycleService();
    const result = await service.delete(id);

    // Assert
    expect(result).to.be.deep.equal(undefined);
  });

  it('Retorna uma exceção quando nenhuma moto for encontrada', async function () {
    // Arrange
    const id = '63320b77aa12f0db4f210afe';

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'deleteOne').resolves();

    // Act
    try {
      const service = new MotorcycleService();
      await service.delete(id);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    } 
  });

  it('Retorna uma exceção quando o id for inválido', async function () {
    // Arrange
    const id = 'xxx';

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'deleteOne').resolves();

    // Act
    try {
      const service = new MotorcycleService();
      await service.delete(id);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});