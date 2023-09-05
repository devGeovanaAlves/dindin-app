const express = require("express");
const { listarContas } = require('./controladores/contas');

const routes = express();

routes.use(express.json());

routes.get("/contas", listarContas);

module.exports = routes;
