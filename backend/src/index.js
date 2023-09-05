const express = require('express');
const routes = require("./servidor");

const app = express();

app.use(routes);

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});
