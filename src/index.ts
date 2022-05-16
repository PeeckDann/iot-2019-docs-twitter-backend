import express from 'express';
import config from 'config';

const appConfig = config.get('appConfig');

const app = express();

app.listen(appConfig.port, () => {
  console.log('Server started');
});
