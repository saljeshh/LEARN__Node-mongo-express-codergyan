const { Product } = require("../model/product");
const ejs = require("ejs");
const path = require("path");

// view for ejs
exports.getAllProductsSSR = async (req, res) => {
  const products = await Product.find();

  ejs.renderFile(
    path.resolve(__dirname, "../pages/index.ejs"),
    { products: products },
    function (err, str) {
      res.send(str);
    }
  );
};

exports.getAddForm = async (req, res) => {
  ejs.renderFile(
    path.resolve(__dirname, "../pages/add.ejs"),
    function (err, str) {
      res.send(str);
    }
  );
};

exports.createProduct = (req, res) => {
  try {
    const product = new Product(req.body);

    product.save();
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "product validation failed or ." });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  if (!products) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product Updated Successfully",
  });
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndUpdate(id, req.body);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product Modified Successfully",
  });
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product deleted",
  });
};
