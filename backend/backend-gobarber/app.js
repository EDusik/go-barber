import 'dotenv/config';
import 'express-async-errors';
import * as Sentry from '@sentry/node';
import express from 'express';
import path from 'path';
import Youch from  'youch';
import cors from 'cors';

import './src/database';
import routes from './src/routes';
import sentryConfig from './src/config/sentry';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({
        error: 'Internal server error'
      });
    });
  }
}

export default new App().server;
