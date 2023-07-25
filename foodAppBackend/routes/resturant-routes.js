const express = require("express");

const resturantController = require("../controllers/resturants-controller");
const { verifyUser, verifyAdmin } = require("../middleware/verify");

const router = express.Router();

router.post("/", resturantController.createResturant);
router.get("/", resturantController.getResturant);
router.get("/:id", resturantController.getResturantById);

module.exports = router;
