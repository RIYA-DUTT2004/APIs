import Product from "../models/Product.js";


// CREATE
export const createProduct = async (
  req,
  res
) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const product = await Product.create({
      name,
      price,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// READ
export const getProducts = async (
  req,
  res
) => {
  try {
    const products = await Product.findAll();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE
export const updateProduct = async (
  req,
  res
) => {
  try {
    const product = await Product.findByPk(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.update(req.body);

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE
export const deleteProduct = async (
  req,
  res
) => {
  try {
    const product = await Product.findByPk(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.destroy();

    res.json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};