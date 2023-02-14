import { Model, models, Schema, model, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(_id: string): Promise<T | null> {
    return this.model.findOne({ _id });
  }

  // public async update(_id: string, obj: Partial<T>): Promise<T | null> {
  //   return this.model.findByIdAndUpdate(
  //     { _id },
  //     { ...obj } as UpdateQuery<T>,
  //     { new: true, select: { model: 1, color: 1 } },
  //   );
  // }

  public async update(_id: string, obj: Partial<T>) {
    return this.model.updateOne(
      { _id },
      { $set: { ...obj } } as UpdateQuery<T>,
    );
  }

  public async delete(_id: string) {
    return this.model.deleteOne({ _id });
  }
}

export default AbstractODM;