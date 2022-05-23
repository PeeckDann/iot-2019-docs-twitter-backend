import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Tweet extends ExtendedModel {
  public tweetText: string;
  public media: string;
}

Tweet.init(
  {
    tweetText: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    media: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  },
  {
    sequelize: db,
    modelName: 'tweet'
  }
);

export default Tweet;
