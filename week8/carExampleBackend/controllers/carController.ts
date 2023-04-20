import { NextFunction, Request, Response } from 'express';
import AppError from '../utility/appError';
import catchAsync from '../utility/catchAsync';
import Car from '../models/carModel';

interface Car {
  id: string;
  model: string;
  year: number;
  price: number;
  [key: string]: any;
}

export const getAllCars = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryObj = req.query;
  console.log(queryObj);
  const data = await Car.find(queryObj);
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
});

export const getCar = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return next(new AppError('No car found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        car,
      },
    });
  }
);

export const createCar = catchAsync(async (req: Request, res: Response) => {
  const newCar = await Car.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      car: newCar,
    },
  });
});

export const updateCar = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!car) {
      return next(new AppError('No car found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        car,
      },
    });
  }
);

export const deleteCar = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return next(new AppError('No car found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  }
);
