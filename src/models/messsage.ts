import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Message extends ExtendedModel {
  public text!: string;
  public pictures!: object[];
}

Message.init(
  {
    text: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pictures: {
      type: DataTypes.ARRAY,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'message'
  }
);

export default Message;
