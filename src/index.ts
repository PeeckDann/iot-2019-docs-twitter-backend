import express, { urlencoded, json, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import config from 'config';
import router from './routers';
import db from './db';
import models from './models';

const appConfig = config.get('appConfig');

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  models.User.findByPk(1).then((user) => {
    //@ts-ignore
    req.user = user;
    next();
  });
});

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());
app.use(router);

db.authenticate()
  .then(() => {
    app.listen(appConfig.port, () => {
      console.log(`Server started on port ${appConfig.port}`);
    });
  })
  .catch((err) => console.log(err));
