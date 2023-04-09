const express = require("express");
const product = require("./routes/product");

const server = express();
const PORT = 4000;

// middlewares
server.use(express.json());
server.use("/api", product);

server.listen(PORT, () => {
  console.log(`listening on https://localhost:${PORT}`);
});
