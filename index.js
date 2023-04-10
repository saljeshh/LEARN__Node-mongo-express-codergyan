const express = require("express");
const product = require("./routes/product");
const mongoose = require("mongoose");

//connection to mongodb
main()
  .then(() => console.log("Connected to Mongodb"))
  .catch((err) => console.error(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecomgyan");
}

// server and port
const server = express();
const PORT = 4000;

// middlewares
server.use(express.json());
server.use("/api", product);

server.listen(PORT, () => {
  console.log(`listening on https://localhost:${PORT}`);
});
