import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes/index';
import errorHandler from './middleware/errorHandler';
import cors from 'cors';
require('./db.js');

let server: any;
server = express();

// server.name = 'API';

// middlerwares
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));


const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));



// rutas
server.use(routes);
server.use(errorHandler);

// Error catching endware.

export default server;
