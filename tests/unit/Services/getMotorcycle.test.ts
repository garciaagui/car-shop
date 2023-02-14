import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes de unidade de listagem do Service de Motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  describe('Listagem de todas as motos', function () {
    it('Retorna todas as motos com SUCESSO', async function () {
      // Arrange
      const input: IMotorcycle[] = [
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
  
      const output = input.map((motorcycle) => {
        const { id, model, year, color, status, buyValue, category, engineCapacity } = motorcycle;

        return new Motorcycle({
          id,
          model,
          year,
          color,
          status,
          buyValue,
          category,
          engineCapacity });
      });
  
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
  
      const input: IMotorcycle = {
        id,
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30990,
        category: 'Street',
        engineCapacity: 600,
      };

      const { model, year, color, status, buyValue, category, engineCapacity } = input;

      const output = new Motorcycle(
        { id,
          model,
          year,
          color,
          buyValue,
          category,
          engineCapacity,
          status,
        },
      );
  
      sinon.stub(Model, 'findOne').resolves(output);
  
      // Act
      const service = new MotorcycleService();
      const result = await service.getById(id);
  
      // Assert
      expect(result).to.be.deep.equal(output);
    });

    it('Retorna uma exceção quando nenhuma moto for encontrada', async function () {
      // Arrange
      const id = '63320b77aa12f0db4f210afe';
  
      sinon.stub(Model, 'findOne').resolves(null);
  
      // Act
      try {
        const service = new MotorcycleService();
        await service.getById(id);
      } catch (error) {
        // Assert
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    });
  
    it('Retorna uma exceção quando o id for inválido', async function () {
      // Arrange
      const id = 'xxx';
  
      sinon.stub(Model, 'findOne').resolves(null);
  
      // Act
      try {
        const service = new MotorcycleService();
        await service.getById(id);
      } catch (error) {
        // Assert
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });
});