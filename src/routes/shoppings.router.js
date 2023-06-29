const express = require("express");
const router = express.Router();
const shoppingsController = require("../controllers/shopping.scontroller");

router
.get("/", shoppingsController.get)
.get("/:id", shoppingsController.getById)
.post('/', shoppingsController.create)
.put('/:id', shoppingsController.update)
.delete('/:id', shoppingsController._delete)
.get("/:startDate/:endDate/:product_barcode", shoppingsController._shoppings);

module.exports = router;
