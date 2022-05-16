import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class User extends ExtendedModel {
  public nickname!: string;
  public tag!: string;
  public followers!: object[];
  public following!: object[];
  public tweets!: object[];
  public polls!: object[];
  public chats: object[];
}

User.init(
  {
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    followers: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    following: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    tweets: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    polls: {
      type: DataTypes.ARRAY,
      allowNull: false
    },
    chats: {
      type: DataTypes.ARRAY,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'user'
  }
);

export default User;
