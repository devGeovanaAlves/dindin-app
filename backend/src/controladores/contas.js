const bancoDeDados = require('../bancodedados');

const listarContas = async (req, res) => {
    const { senha_banco } = req.query;
    const senhaBanco = Number(senha_banco);

    if (senhaBanco !== 123) {
        return res.status(404).json({ message: 'Erro para acessar conta' });
    }

    return res.status(200).json({ contas: bancoDeDados.contas });
};

module.exports = {
    listarContas
};