import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import NotFoundException from '../Exceptions/NotFound';
import UnprocessableException from '../Exceptions/Unprocessable';

const CAR_NOT_FOUND_MESSAGE = 'Motorcycle not found';
const INVALID_ID_MESSAGE = 'Invalid mongo id';

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
    if (!isValidObjectId(id)) throw new UnprocessableException(INVALID_ID_MESSAGE);

    const motorcycleODM = new MotorcycleODM();
    const foundMotorcycle = await motorcycleODM.getById(id);

    if (!foundMotorcycle) {
      throw new NotFoundException(CAR_NOT_FOUND_MESSAGE);
    }

    return this.createMotorcycleDomain(foundMotorcycle);
  }

  public async updateById(id: string, motorcycle: IMotorcycle) {
    this.validateById(id);
    
    const motorcycleODM = new MotorcycleODM();
    await motorcycleODM.updateById(id, motorcycle);
    return this.createMotorcycleDomain({ id, ...motorcycle });
  }

  public async deleteById(id: string) {
    this.validateById(id);
    
    const motorcycleODM = new MotorcycleODM();
    return motorcycleODM.deleteById(id);
  }

  private async validateById(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableException(INVALID_ID_MESSAGE);
  
    const foundMotorcycle = await this.getById(id);
    if (!foundMotorcycle) throw new NotFoundException(CAR_NOT_FOUND_MESSAGE);
  }
}

export default MotorcycleService;