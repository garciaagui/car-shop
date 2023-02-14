import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import NotFoundException from '../Exceptions/NotFound';
import UnprocessableException from '../Exceptions/Unprocessable';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
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
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getAll();
    const motorcyclesArr = motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcyclesArr;
  }

  public async getById(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableException('Invalid mongo id');

    const motorcycleODM = new MotorcycleODM();
    const foundMotorcycle = await motorcycleODM.getById(id);

    if (!foundMotorcycle) {
      throw new NotFoundException('Motorcycle not found');
    }

    return this.createMotorcycleDomain(foundMotorcycle);
  }
}

export default MotorcycleService;