import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Message extends ExtendedModel {
  public text!: string;
  public media!: string;
}

Message.init(
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
    modelName: 'message'
  }
);

export default Message;
