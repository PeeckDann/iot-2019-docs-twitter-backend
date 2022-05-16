import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Choice extends ExtendedModel {
  public text!: string;
}

Choice.init(
  {
    text: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'choice'
  }
);

export default Choice;
