import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Poll extends ExtendedModel {
  public question!: string;
  public choices!: object[];
  public duration!: number;
}

Poll.init(
  {
    question: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    choices: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    duration: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'poll'
  }
);

export default Poll;
