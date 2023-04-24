const express = require("express");
const { getProducts, createProducts, updateProducts, deleteProducts } = require("../controllers/products");

const router = express.Router();

router.get("/getProducts", getProducts);
router.post("/createProducts", createProducts);
router.patch("/updateProducts/:id", updateProducts);
router.delete("/deleteProducts/:id", deleteProducts);

module.exports = router;
