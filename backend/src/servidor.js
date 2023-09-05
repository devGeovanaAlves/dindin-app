const express = require("express");
const { listarContas, criarContas, atualizarContas } = require('./controladores/contas');

const routes = express();

routes.use(express.json());

routes.get("/contas", listarContas);
routes.post("/contas", criarContas);
routes.put("/contas/:numeroConta/usuario", atualizarContas);

module.exports = routes;
