import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Tweet extends ExtendedModel {
  public text!: string;
  public media!: string;
  public numberOfLikes!: number;
  public numberOfComments!: number;
  public numberOfRetweets!: number;
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
    },
    numberOfLikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    numberOfComments: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    numberOfRetweets: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    sequelize: db,
    modelName: 'tweet'
  }
);

export default Tweet;
