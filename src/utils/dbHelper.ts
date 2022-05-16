import { Model } from 'sequelize';

export class ExtendedModel extends Model {
  public id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
