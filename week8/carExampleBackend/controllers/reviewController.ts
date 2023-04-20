import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utility/catchAsync';
import Review from '../models/reviewModel';


export const getAllReviews = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await Review.find();
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
});

export const createReview = catchAsync(async (req: Request, res: Response) => {
  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
});
