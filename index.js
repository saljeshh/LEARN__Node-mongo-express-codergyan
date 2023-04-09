const http = require("http");
const data = require("./data.json");
const fs = require("fs");
//const product = data.products[0];

const index = fs.readFileSync("index.html", "utf-8");

// const server = http.createServer((req, res) => {

//   // reason the server start twice because one for path another for the facicon
//   console.log(req.url);

//   console.log("Server Started");
//   // unknown header
//   res.setHeader("Dummy", "Dumy Value");
//   // known header
//   res.setHeader("Content-Type", "text/html");
//   //res.setHeader("Content-Type", "json");
//   // converting to json otherwise browser wont understand
//   //res.end(JSON.stringify(data));
//   res.end(index);
// });

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/products")) {
    const id = req.url.split("/")[2];

    const product = data.products[+id];
    res.setHeader("Content-Type", "text/html");
    let modIndex = index
      .replace("**title**", product.title)
      .replace("**discription**", product.description)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating)
      .replace("**image**", product.images[0]);
    res.end(modIndex);
    return;
  }

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(product));
      break;

    // case `/products`:
    //   const id = req.params.id;
    //   const product = data.products[+id];
    //   res.setHeader("Content-Type", "text/html");
    //   let modIndex = index
    //     .replace("**title**", product.title)
    //     .replace("**discription**", product.description)
    //     .replace("**price**", product.price)
    //     .replace("**rating**", product.rating)
    //     .replace("**image**", product.images[0]);
    //   res.end(modIndex);
    //   break;

    default:
      res.end("404 ERROR");
  }
});

// telling our function(server) where to run i.e run at localhost:4000 when hitted
server.listen(4000);
