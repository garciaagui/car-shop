import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testes de unidade de listagem do Service de Car', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  describe('Listagem de todos os carros', function () {
    it('Retorna todos os carros com SUCESSO', async function () {
      // Arrange
      const input: ICar[] = [
        {
          id: '63320b77aa12f0db4f210afe',
          model: 'Marea',
          year: 2002,
          color: 'Black',
          buyValue: 15990,
          doorsQty: 4,
          seatsQty: 5,
          status: true,
        },
        {
          id: '63320b77aa12f0db4f210aff',
          model: 'Gol',
          year: 2014,
          color: 'Red',
          buyValue: 20000,
          doorsQty: 4,
          seatsQty: 5,
          status: true,
        },
      ];
  
      const output = input.map((car) => {
        const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = car;
        return new Car({
          id,
          model,
          year,
          color,
          status,
          buyValue,
          doorsQty,
          seatsQty });
      });
  
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
  
      const input: ICar = {
        id,
        model: 'Marea',
        year: 2002,
        color: 'Black',
        buyValue: 15990,
        doorsQty: 4,
        seatsQty: 5,
        status: true,
      };

      const { model, year, color, status, buyValue, doorsQty, seatsQty } = input;

      const output = new Car(
        { id,
          model,
          year,
          color,
          buyValue,
          doorsQty,
          seatsQty,
          status,
        },
      );
  
      sinon.stub(Model, 'findOne').resolves(output);
  
      // Act
      const service = new CarService();
      const result = await service.getById(id);
  
      // Assert
      expect(result).to.be.deep.equal(output);
    });

    it('Retorna uma exceção quando nenhum carro for encontrado', async function () {
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
  
    it('Retorna uma exceção quando o id for inválido', async function () {
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