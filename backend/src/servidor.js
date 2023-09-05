const express = require("express");
const { listarContas, criarContas } = require('./controladores/contas');

const routes = express();

routes.use(express.json());

routes.get("/contas", listarContas);
routes.post("/contas", criarContas);

module.exports = routes;
