const ProductSchema = require("../models/products");

const getProducts = async (req, res) => {
  try {
    const getPosts = await ProductSchema.find().sort("-dateCreated");
    res.status(200).json(getPosts)
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createProducts = async (req, res) => {
  try {
    const newPost = await ProductSchema.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await ProductSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductSchema.findByIdAndRemove(id);
    res.status(200).json({ msg: "Silme işlemi başarılı" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getProducts, createProducts, updateProducts, deleteProducts };
