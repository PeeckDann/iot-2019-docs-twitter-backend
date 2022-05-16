import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Tweet extends ExtendedModel {
  public text!: string;
  public pictures!: object[];
  public retweets!: object[];
  public quotedTweets!: object[];
  public comments: object[];
  public usersThatLiked: object[];
}

Tweet.init(
  {
    text: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pictures: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    retweets: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    quotedTweets: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    comments: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    usersThatLiked: {
      type: DataTypes.ARRAY,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'tweet'
  }
);

export default Tweet;
