import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import NotFoundException from '../Exceptions/NotFound';
import UnprocessableException from '../Exceptions/Unprocessable';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
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
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const paymentODM = new CarODM();
    const cars = await paymentODM.getAll();
    const carsArr = cars.map((car) => this.createCarDomain(car));
    return carsArr;
  }

  public async getById(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableException('Invalid mongo id');

    const carODM = new CarODM();
    const foundCar = await carODM.getById(id);

    if (!foundCar) {
      throw new NotFoundException('Car not found');
    }

    return this.createCarDomain(foundCar);
  }

  public async update(id: string, car: ICar) {
    if (!isValidObjectId(id)) throw new UnprocessableException('Invalid mongo id');
    
    if (await this.getById(id)) {
      const carODM = new CarODM();
      return carODM.update(id, car);
    }
    
    throw new NotFoundException('Car not found');
  }
}

export default CarService;