const CompanySchema = require("../models/companies.js");

const getCompanies = async (req, res) => {
  try {
    const getPosts = await CompanySchema.find().sort("-dateCreated");
    res.status(200).json(getPosts)
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createCompanies = async (req, res) => {
  try {
    const newPost = await CompanySchema.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateCompanies = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await CompanySchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteCompanies = async (req, res) => {
  const { id } = req.params;
  try {
    await CompanySchema.findByIdAndRemove(id);
    res.status(200).json({ msg: "Silme işlemi başarılı" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getCompanies, createCompanies, updateCompanies, deleteCompanies };
