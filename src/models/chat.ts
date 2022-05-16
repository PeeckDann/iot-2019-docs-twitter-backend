import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Chat extends ExtendedModel {
  public messages!: object[];
}

Chat.init(
  {
    messages: {
      type: DataTypes.ARRAY,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'chat'
  }
);

export default Chat;
