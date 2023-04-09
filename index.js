const express = require("express");
const data = require("./data.json");

const server = express();
const PORT = 4000;

// middlewares
server.use(express.json());

// routes-restapi
//products
// API ROOT , base URL, example - google.com/api/v2

/* -------CREATE API ------------- */
server.post("/products", (req, res) => {
  // saving into database for now it is our json data
  data.products.push(req.body);
  res.status(201).json(req.body);
});

// READ = all products
server.get("/products", (req, res) => {
  res.status(201).json(data);
});

// READ = one specific product
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = data.products.find((p) => p.id === id);
  res.status(200).json(product);
});

// update replaces all
// UPDATE = one specific product
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = data.products.findIndex((p) => p.id === id);

  data.products.splice(productIndex, 1, { ...req.body, id: id });

  res.status(201).json({ success: true });
});

// patch only updates the key and values we sent
// PATCH
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = data.products.findIndex((p) => p.id === id);
  const product = data.products[productIndex];
  data.products.splice(productIndex, 1, { ...product, ...req.body });

  res.status(201).json({ success: true });
});

// DELETE - only one in REST
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = data.products.findIndex((p) => p.id === id);
  data.products.splice(productIndex, 1); // remove

  res.status(201).json({ success: true });
});

server.listen(PORT, () => {
  console.log(`listening on https://localhost:${PORT}`);
  ``;
});
