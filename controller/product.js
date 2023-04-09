const data = require("../data.json");

exports.createProduct = (req, res) => {
  // saving into database for now it is our json data
  data.products.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.status(201).json(data);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = data.products.find((p) => p.id === id);
  res.status(200).json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = data.products.findIndex((p) => p.id === id);

  data.products.splice(productIndex, 1, { ...req.body, id: id });

  res.status(201).json({ success: true });
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = data.products.findIndex((p) => p.id === id);
  const product = data.products[productIndex];
  data.products.splice(productIndex, 1, { ...product, ...req.body });

  res.status(201).json({ success: true });
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = data.products.findIndex((p) => p.id === id);
  data.products.splice(productIndex, 1); // remove

  res.status(201).json({ success: true });
};
