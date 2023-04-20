import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utility/catchAsync';
import Mechanic from '../models/mechanicModel';


export const getAllMechanics = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await Mechanic.find();
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
});

export const createMechanic = catchAsync(async (req: Request, res: Response) => {
  const newMechanic = await Mechanic.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      mechanic: newMechanic,
    },
  });
});
