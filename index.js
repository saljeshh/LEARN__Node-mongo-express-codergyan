require("dotenv").config();
const jwt = require("jsonwebtoken");

const express = require("express");
const product = require("./routes/product");
const user = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const authRouter = require("./routes/auth");
const publicKey = fs.readFileSync(
  path.resolve(__dirname, "./public.key"),
  "utf8"
);

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
const auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];
    console.log(token);

    var decoded = jwt.verify(token, publicKey);
    console.log(decoded);
    // get request, so if there is no token in authentication header then the data  wont come
    if (decoded.email) {
      next();
    } else {
      res.sendStatus(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    res.sendStatus(401).json({ messsage: "Unauthorized" });
  }
};

server.use(cors());
server.use(express.json());
server.use(express.urlencoded());
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/auth", authRouter.router);
server.use("/api", auth, product);
server.use("/api", auth, user);

server.listen(process.env.PORT, () => {
  console.log(`listening on http://localhost:${process.env.PORT}`);
});
