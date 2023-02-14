import Motorcycle from '../Domains/Motorcyle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

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
}

export default MotorcycleService;