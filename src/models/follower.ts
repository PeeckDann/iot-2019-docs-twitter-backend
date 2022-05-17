import { ExtendedModel } from '../utils/dbHelper';
import db from '../db';

class Follower extends ExtendedModel {}

Follower.init(
  {},
  {
    sequelize: db,
    modelName: 'follower'
  }
);

export default Follower;
