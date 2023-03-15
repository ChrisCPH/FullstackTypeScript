import logger from "../utility/logger";
import {Request, Response} from 'express';
import mongoose from "mongoose";
import Car from "../models/carmodel";

interface Car {
  id: string;
  model: string;
  year: number;
  price: number;
  color: string;

  [key: string]: any;
}


export const getAllCars = async (req: Request, res: Response) => {
  try {

    //const data = cars;
    const data = await Car.find();

    res.status(200)
      .json({
        status: "success",
        results: data.length,
        data: {
          data,
      },
    });
  } catch(err) {
    res.status(400)
      .json({
        status:"error",
        message: err,
      })
  }
};

export const getCar = async (req: Request, res: Response) => {
  try {
    //const id = req.params.id;
    //const car = cars[parseInt(id)];

    const car = await Car.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        car,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
};

export const createCar = async (req: Request, res: Response) => {
  try {
    //const newCar = req.body;
    //newCar.id = cars.length + 1;
    //cars.push(newCar);

    const newCar = await Car.create(req.body);
    
    res.status(201)
      .json({
        status: "success",
        data: {
          car: newCar,
        },
      });
  } catch (err) {
    logger.debug("Error: " + err);
    res.status(400)
      .json({
        status:"error",
        message: err,
      })
  }
};

export const updateCar = async(req: Request, res: Response) => {
  try{
    
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success",
      data: {
        car,
      },
    });
  } catch (err) {
    logger.debug("Error: " + err);
    res.status(404).json({
        status:"error",
        message: err,
      })
  }
}

export const deleteCar = async (req: Request, res: Response) => {
  try {
    await Car.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    logger.debug("Error: " + err);
    res.status(404).json({
        status:"error",
        message: err,
      })
  }
}