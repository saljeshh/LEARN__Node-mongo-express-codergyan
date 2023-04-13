require("dotenv").config();

const express = require("express");
const product = require("./routes/product");
const user = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");

// connection to mongodb
main()
  .then(() => console.log("Connected to Mongodb"))
  .catch((err) => console.error(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecomgyan");
}

// server and port
const server = express();
//console.log("env", process.env.PORT);

// middlewares
server.use(cors());
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/api", product);
server.use("/api", user);

server.listen(process.env.PORT, () => {
  console.log(`listening on https://localhost:${process.env.PORT}`);
});
