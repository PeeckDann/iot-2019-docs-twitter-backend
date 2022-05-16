// TODO:
// 1 - remove excessive properties from models
// 2 - add relations
// 3 - create db and default user
// 4 - add user to req
// 5 - test user layers

import express, { urlencoded, json } from 'express';
import cors from 'cors';
import config from 'config';
// import router from './routers';
// import db from './db';

const appConfig = config.get('appConfig');

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());
// app.use(router);

app.listen(appConfig.port, () => {
  console.log('Server started');
});

// db.authenticate()
//   .then(() => {
//     app.listen(appConfig.port, () => {
//       console.log('Server started');
//     });
//   })
//   .catch((err) => console.log(err));
