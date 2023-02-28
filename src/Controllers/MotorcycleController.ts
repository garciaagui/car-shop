import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';
import statusCodes from '../Utils/statusCodes';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = { ...this.req.body };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(statusCodes.created).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const motorcycles = await this.service.getAll();
      return this.res.status(statusCodes.ok).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    try {
      const motorcycle = await this.service.getById(this.req.params.id);
      return this.res.status(statusCodes.ok).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    const updateContent: IMotorcycle = { ...this.req.body };
    const { id } = this.req.params;

    try {
      const updatedMotorcycle = await this.service.updateById(id, updateContent);
      return this.res.status(statusCodes.ok).json(updatedMotorcycle);
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

export default MotorcycleController;