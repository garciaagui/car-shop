import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import { validInput } from './Mocks/carMocks';

describe('Exclusão de carros [Service]', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Exclui um carro pelo ID com SUCESSO', async function () {
    // Arrange
    const id = '63320b77aa12f0db4f210afe';
    const findOutput = new Car({ id, ...validInput });

    sinon.stub(Model, 'findOne').resolves(findOutput);
    sinon.stub(Model, 'deleteOne').resolves();

    // Act
    const service = new CarService();
    const result = await service.deleteById(id);

    // Assert
    expect(result).to.be.deep.equal(undefined);
  });

  it('Retorna uma EXCEÇÃO quando nenhum carro for encontrado', async function () {
    // Arrange
    const noCarId = '63320b77aa12f0db4f210aff';

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'deleteOne').resolves();

    // Act
    try {
      const service = new CarService();
      await service.deleteById(noCarId);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Car not found');
    } 
  });

  it('Retorna uma EXCEÇÃO quando o id for inválido', async function () {
    // Arrange
    const invalidId = 'xxx';

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'deleteOne').resolves();

    // Act
    try {
      const service = new CarService();
      await service.deleteById(invalidId);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});