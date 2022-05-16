import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class User extends ExtendedModel {
  public nickname!: string;
  public tag!: string;
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
    }
  },
  {
    sequelize: db,
    modelName: 'user'
  }
);

export default User;
