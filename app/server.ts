import express from 'express';
// TYPEORM
import {createConnection} from 'typeorm';
import 'reflect-metadata';

import {MainController} from './controllers';


createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'brewpi_server',
  entities: [
    `${__dirname}/entity/*.js`
  ],
  synchronize: true,
  logging: false
}).then(async connection => {
  const app: express.Application = express();
  const port: any = process.env.PORT || 3000;

  app.use('/', MainController);

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
  })

}).catch(error => console.log('TypeORM connection error: ', error));
