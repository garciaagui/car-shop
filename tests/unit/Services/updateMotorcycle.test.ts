import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { validInput, validUpdateInput } from './Mocks/motorcycleMocks';

describe('Testes de unidade de atualização do Service de Motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Retorna a moto atualizada com SUCESSO', async function () {
    // Arrange
    const id = '63320b77aa12f0db4f210afe';
    const findOutput = new Motorcycle({ id, ...validInput });
    const updateOutput = new Motorcycle({ id, ...validUpdateInput });

    sinon.stub(Model, 'findOne').resolves(findOutput);
    sinon.stub(Model, 'updateOne').resolves();

    // Act
    const service = new MotorcycleService();
    const result = await service.update(id, validUpdateInput);

    // Assert
    expect(result).to.be.deep.equal(updateOutput);
  });

  it('Retorna uma exceção quando nenhuma moto for encontrada', async function () {
    // Arrange
    const noMotorcycleId = '63320b77aa12f0db4f210afe';

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'updateOne').resolves();

    // Act
    try {
      const service = new MotorcycleService();
      await service.update(noMotorcycleId, validUpdateInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    } 
  });

  it('Retorna uma exceção quando o id for inválido', async function () {
    // Arrange
    const invalidId = 'xxx';

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'updateOne').resolves();

    // Act
    try {
      const service = new MotorcycleService();
      await service.update(invalidId, validUpdateInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});