import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import statusCodes from '../Utils/statusCodes';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = { ...this.req.body };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(statusCodes.created).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const cars = await this.service.getAll();
      return this.res.status(statusCodes.ok).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    try {
      const car = await this.service.getById(this.req.params.id);
      return this.res.status(statusCodes.ok).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const updateContent: ICar = { ...this.req.body };
    const { id } = this.req.params;

    try {
      const updatedCar = await this.service.updateById(id, updateContent);
      return this.res.status(statusCodes.ok).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteById() {
    try {
      await this.service.deleteById(this.req.params.id);
      return this.res.status(statusCodes.noContent).json();
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;