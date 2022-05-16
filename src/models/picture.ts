import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Picture extends ExtendedModel {
  public name!: string;
  public link!: string;
}

Picture.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'picture'
  }
);

export default Picture;
