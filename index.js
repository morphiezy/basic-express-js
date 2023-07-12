const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("This is About page");
});

app.get("/product", (req, res) => {
  const produtcs = [
    { name: "Shoes", size: "43", brand: "Adidas" },
    { name: "Shoes", size: "40", brand: "Nike" },
  ];

  res.json(produtcs);
});

app.get("/html", (req, res) => {
  res.set({ "Content-Type": "text/html" });
  res.send("<p>Hello <b>World!</b></p>");
});

app.get("/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
