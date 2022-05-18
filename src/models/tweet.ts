import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Tweet extends ExtendedModel {
  public text!: string;
  public media!: string;
}

Tweet.init(
  {
    text: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    media: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'tweet'
  }
);

export default Tweet;
