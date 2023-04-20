import express = require("express");
import {createMechanic, getAllMechanics } from '../controllers/mechanicController';

const router = express.Router();

router.route("/").get(getAllMechanics).post(createMechanic);

export default router;
