import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Choice extends ExtendedModel {
  public text!: string;
  public voters!: object[];
}

Choice.init(
  {
    text: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    voters: {
      type: DataTypes.ARRAY,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'choice'
  }
);

export default Choice;
