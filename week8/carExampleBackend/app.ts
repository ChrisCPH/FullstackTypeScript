import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import express = require('express');
import { NextFunction, Request, Response } from 'express';
import morgan = require('morgan');
import AppError from './utility/appError';
import globalErrorHandler from './middleware/globalErrorHandler';
import carRouter from './routes/carRoutes';
import reviewRouter from './routes/reviewRoutes';
import mechanicRouter from './routes/mechanicRoutes';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log('Development mode....');
}

app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files

app.use((req: Request, res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/cars', carRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/mechanics', mechanicRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
