import { DataTypes } from 'sequelize';
import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Comment extends ExtendedModel {
  public text!: string;
  public media!: string;
}

Comment.init(
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
    modelName: 'comment'
  }
);

export default Comment;
