import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Choice extends ExtendedModel {
  public text!: string;
  public votes!: number;
}

Choice.init(
  {
    text: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    numberOfVotes: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'choice'
  }
);

export default Choice;
