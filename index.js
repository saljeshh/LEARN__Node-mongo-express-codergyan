const data = require("./data.json");
const fs = require("fs");
const product = data.products;

const express = require("express");
const morgan = require("morgan");
const PORT = 4000;
const server = express();

// body parser
//json data middleware built in
server.use(express.json());
//server.use(express.urlencoded());

server.use(express.static("public"));

// test middleware
server.use((req, res, next) => {
  console.log("this is middleware");
  console.log(req.method, req.ip, req.hostname, new Date());
  next();
});

// authentication middleware
const auth = (req, res, next) => {
  console.log(req.query);
  if (req.query.password || req.body.password) {
    console.log("Authenticated");
    next();
  } else {
    res.sendStatus(401);
  }
};

// if i keep this auth middleware here it will just ask for authentication for every url so better use router level middleware
//server.use(auth);

// third party middleware
server.use(morgan("dev")); // see on express/reserouce/middleware/morgan
// POST /?password=123 200 4.688 ms - 15 -------- job of morgan i.e logger

// API -  ENDPOINT / Route - NOT rest api yet
server.get("/", (req, res) => {
  //res.json(product);
  // for html
  //res.send(fs.readFileSync("index.html", "utf8"));
  //res.sendStatus(201);
  res.status(201).send(fs.readFileSync("index.html", "utf8"));
});

// using middleware to make auth first
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", auth, (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", auth, (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", auth, (req, res) => {
  res.json({ type: "PATCH" });
});

// server listen
server.listen(PORT, () => {
  console.log(`Server listening on https://localhost:${PORT}`);
});
