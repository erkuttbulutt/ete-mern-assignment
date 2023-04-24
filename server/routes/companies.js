const express = require("express");
const { getCompanies, createCompanies, updateCompanies, deleteCompanies } = require("../controllers/companies.js");

const router = express.Router();

router.get("/getCompanies", getCompanies);
router.post("/createCompanies", createCompanies);
router.patch("/updateCompanies/:id", updateCompanies);
router.delete("/deleteCompanies/:id", deleteCompanies);

module.exports = router;
