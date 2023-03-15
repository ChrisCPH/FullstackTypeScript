import express = require("express");
import {getAllCars, createCar, deleteCar, getCar, updateCar} from "../controllers/carController"

const router = express.Router();

router.route("/").get(getAllCars).post(createCar);
router.route("/:id").get(getCar).delete(deleteCar).patch(updateCar);

export default router;