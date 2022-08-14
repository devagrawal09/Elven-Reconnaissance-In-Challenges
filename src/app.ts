import 'reflect-metadata';
import path from 'path';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import hpp from 'hpp';
import morgan from 'morgan';
import { NODE_ENV, PORT, ORIGIN, CREDENTIALS } from '@config';
import { sequelize } from '@databases';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.connectToDatabase();
    this.configureApp();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  public listen() {
    this.app.listen(this.port);
    console.log(`Server is running on port ${this.port}`);
  }

  public getServer() {
    return this.app;
  }

  private connectToDatabase() {
    sequelize.sync({ force: false });
  }

  private configureApp() {
    this.app.set('view engine', 'ejs');
  }

  private initializeMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(hpp());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(`/static`, express.static(path.join(__dirname, '../static')));
  }

  private initializeRoutes() {
    this.app.use('/', require('./routes/index.route').router);
  }
}

export default App;
