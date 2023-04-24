const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  companyLegalNumber: {
    type: String,
    required: true,
    trim: true,
  },
  incorporationCountry: {
    type: String,
    required: true,
    trim: true,
  },
  website: {
    type: String,
    required: true,
    trim: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  
});

module.exports = mongoose.model("companies", CompanySchema);
