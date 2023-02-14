import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testes de unidade de atualização do Service de Car', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Retorna o carro atualizado com SUCESSO', async function () {
    // Arrange
    const id = '63320b77aa12f0db4f210afe';

    const findOutput = new Car(
      { id,
        model: 'Marea',
        year: 2002,
        color: 'Black',
        buyValue: 15990,
        doorsQty: 4,
        seatsQty: 5,
        status: true,
      },
    );

    const updateInput: ICar = {
      id,
      model: 'Santana',
      year: 1999,
      color: 'Grey',
      buyValue: 10500,
      doorsQty: 4,
      seatsQty: 5,
      status: true,
    };

    const updateOutput = new Car(
      { id,
        model: updateInput.model,
        year: updateInput.year,
        color: updateInput.color,
        buyValue: updateInput.buyValue,
        doorsQty: updateInput.doorsQty,
        seatsQty: updateInput.seatsQty,
        status: updateInput.status,
      },
    );

    sinon.stub(Model, 'findOne').resolves(findOutput);
    sinon.stub(Model, 'updateOne').resolves();

    // { 
    //   acknowledged: true, 
    //   matchedCount: 1,
    //   modifiedCount: 1,
    //   upsertedCount: 0,
    //   upsertedId: null,
    // },

    // Act
    const service = new CarService();
    const result = await service.update(id);

    // Assert
    expect(result).to.be.deep.equal(updateOutput);
  });

  it('Retorna uma exceção quando nenhum carro for encontrado', async function () {
    // Arrange
    const id = '63320b77aa12f0db4f210afe';

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'updateOne').resolves();

    // Act
    try {
      const service = new CarService();
      await service.update(id);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Car not found');
    } 
  });

  it('Retorna uma exceção quando o id for inválido', async function () {
    // Arrange
    const id = 'xxx';

    sinon.stub(Model, 'findOne').resolves(null);
    sinon.stub(Model, 'updateOne').resolves();

    // Act
    try {
      const service = new CarService();
      await service.update(id);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});