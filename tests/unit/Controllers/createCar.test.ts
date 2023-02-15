import { expect } from 'chai';
import sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';

import CarService from '../../../src/Services/CarService';
import CarController from '../../../src/Controllers/CarController';
import Car from '../../../src/Domains/Car';
import { validInput } from '../Services/Mocks/carMocks';

describe('Testes de unidade de cadastro do Controller de Car', function () {
  it('Cadastra um novo veículo com SUCESSO', async function () {
    const res = {} as Response;
    const req = { body: validInput } as Request;
    const next = sinon.stub() as unknown as NextFunction;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    const id = '63319d80feb9f483ee823ac5';
    const output: Car = new Car({ id, ...validInput });

    sinon
      .stub(CarService.prototype, 'create')
      .resolves(output);

    await new CarController(req, res, next).create();

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.equal(true);
    expect((res.json as sinon.SinonStub).calledWith(output)).to.be.equal(true);
  });
});