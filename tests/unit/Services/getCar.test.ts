import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import { validArrInput, validInput } from './Mocks/carMocks';

describe('Listagem de carros [Service]', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  describe('Listagem de todos os carros', function () {
    it('Retorna todos os carros com SUCESSO', async function () {
      // Arrange
      const output = validArrInput.map((car) => new Car({ ...car }));
  
      sinon.stub(Model, 'find').resolves(output);
  
      // Act
      const service = new CarService();
      const result = await service.getAll();
  
      // Assert
      expect(result).to.be.deep.equal(output);
    });
  });

  describe('Listagem de carros por ID', function () {
    it('Retorna com SUCESSO o carro cujo id foi passado na URL', async function () {
      // Arrange
      const id = '63320b77aa12f0db4f210afe';
      const output = new Car({ id, ...validInput });
  
      sinon.stub(Model, 'findOne').resolves(output);
  
      // Act
      const service = new CarService();
      const result = await service.getById(id);
  
      // Assert
      expect(result).to.be.deep.equal(output);
    });

    it('Retorna uma EXCEÇÃO quando nenhum carro for encontrado', async function () {
      // Arrange
      const id = '63320b77aa12f0db4f210afe';
  
      sinon.stub(Model, 'findOne').resolves(null);
  
      // Act
      try {
        const service = new CarService();
        await service.getById(id);
      } catch (error) {
        // Assert
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  
    it('Retorna uma EXCEÇÃO quando o id for inválido', async function () {
      // Arrange
      const id = 'xxx';
  
      sinon.stub(Model, 'findOne').resolves(null);
  
      // Act
      try {
        const service = new CarService();
        await service.getById(id);
      } catch (error) {
        // Assert
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });
});