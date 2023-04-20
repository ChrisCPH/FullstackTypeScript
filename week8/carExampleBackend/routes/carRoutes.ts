import express = require("express");
import {getCar, createCar, deleteCar, updateCar, getAllCars} from "../controllers/carController";

const router = express.Router();

router.route("/").get(getAllCars).post(createCar);
router.route("/:id").get(getCar).patch(updateCar).delete(deleteCar);

export default router;
