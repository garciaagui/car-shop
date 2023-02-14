import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

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
}

export default CarService;