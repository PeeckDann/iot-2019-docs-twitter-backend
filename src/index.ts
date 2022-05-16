// TODO:
// 1 - create default user
// 2 - add user to req
// 3 - test user layers

import express, { urlencoded, json } from 'express';
import cors from 'cors';
import config from 'config';
import router from './routers';
import db from './db';

const appConfig = config.get('appConfig');

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());
app.use(router);

db.sync({ force: true })
  .then(() => {
    app.listen(appConfig.port, () => {
      console.log('Server started');
    });
  })
  .catch((err) => console.log(err));
