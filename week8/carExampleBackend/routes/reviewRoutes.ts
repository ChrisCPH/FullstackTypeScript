import express = require("express");
import { getAllReviews, createReview } from "../controllers/reviewController";

const router = express.Router();

router.route("/").get(getAllReviews).post(createReview);

export default router;

