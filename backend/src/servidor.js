const express = require("express");

const routes = express();

routes.use(express.json());

routes.get("/", (request, response) => {
  response.send("Hello World");
});

module.exports = routes;
