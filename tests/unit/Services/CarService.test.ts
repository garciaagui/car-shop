import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

describe('Cadastro de novos carros', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deveria cadastrar um novo veículo com SUCESSO', async function () {
    // Arrange
    const input: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      buyValue: 15990,
      doorsQty: 4,
      seatsQty: 5,
      status: true,
    };

    const output: Car = new Car(
      '63319d80feb9f483ee823ac5',
      'Marea',
      2002,
      'Black',
      15990,
      4,
      5,
      true,
    );

    sinon.stub(Model, 'create').resolves(output);

    // Act
    const service = new CarService();
    const result = await service.create(input);

    // Assert
    expect(result).to.be.deep.equal(output);
  });
});