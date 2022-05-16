import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Chat extends ExtendedModel {}

Chat.init(
  {},
  {
    sequelize: db,
    modelName: 'chat'
  }
);

export default Chat;
