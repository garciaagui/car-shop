import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { validArrInput, validInput } from './Mocks/motorcycleMocks';

describe('Testes de unidade de listagem do Service de Motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  describe('Listagem de todas as motos', function () {
    it('Retorna todas as motos com SUCESSO', async function () {
      // Arrange
      const output = validArrInput
        .map((motorcycle) => new Motorcycle({ ...motorcycle }));
  
      sinon.stub(Model, 'find').resolves(output);
  
      // Act
      const service = new MotorcycleService();
      const result = await service.getAll();
  
      // Assert
      expect(result).to.be.deep.equal(output);
    });
  });

  describe('Listagem de motos por ID', function () {
    it('Retorna com SUCESSO a moto cujo id foi passado na URL', async function () {
      // Arrange
      const id = '63320b77aa12f0db4f210afe';
      const output = new Motorcycle({ id, ...validInput });
  
      sinon.stub(Model, 'findOne').resolves(output);
  
      // Act
      const service = new MotorcycleService();
      const result = await service.getById(id);
  
      // Assert
      expect(result).to.be.deep.equal(output);
    });

    it('Retorna uma exceção quando nenhuma moto for encontrada', async function () {
      // Arrange
      const noMotorcycleId = '63320b77aa12f0db4f210aff';
  
      sinon.stub(Model, 'findOne').resolves(null);
  
      // Act
      try {
        const service = new MotorcycleService();
        await service.getById(noMotorcycleId);
      } catch (error) {
        // Assert
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });
  
    it('Retorna uma exceção quando o id for inválido', async function () {
      // Arrange
      const invalidId = 'xxx';
  
      sinon.stub(Model, 'findOne').resolves(null);
  
      // Act
      try {
        const service = new MotorcycleService();
        await service.getById(invalidId);
      } catch (error) {
        // Assert
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });
});