import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Like extends ExtendedModel {}

Like.init(
  {},
  {
    sequelize: db,
    modelName: 'like'
  }
);

export default Like;
