const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
  getAllProductsSSR,
  getAddForm,
} = require("../controller/product");

const router = express.Router();

/* -------CREATE API ------------- */
router
  .post("/products", createProduct)
  .get("/products", getAllProducts)
  .get("/products/ssr", getAllProductsSSR)
  .get("/products/add", getAddForm)
  .get("/products/:id", getProduct)
  .put("/products/:id", replaceProduct)
  .patch("/products/:id", updateProduct)
  .delete("/products/:id", deleteProduct);

module.exports = router;
