const bancoDeDados = require('../bancodedados');

const listarContas = async (req, res) => {
    const { senha_banco } = req.query;
    const senhaBanco = Number(senha_banco);

    if (senhaBanco !== 123) {
        return res.status(404).json({ message: 'Erro para acessar conta' });
    }

    return res.status(200).json({ contas: bancoDeDados.contas });
};

const criarContas = async (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    let numero = bancoDeDados.contas.length + 1;
    const saldo = 0;

    try {
        const cpfExiste = bancoDeDados.contas.find((user) => {
            return user.usuario.cpf === Number(cpf);
        });

        if (cpfExiste) {
            return res.status(400).json({ message: 'CPF inválido' });
        }

        const emailExiste = bancoDeDados.contas.find((user) => {
            return user.usuario.email === email;
        });

        if (emailExiste) {
            return res.status(400).json({ message: 'Email inválido' });
        }

        if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        const novaConta = {
            numero,
            saldo,
            usuario: {
                nome,
                cpf: Number(cpf),
                data_nascimento,
                telefone,
                email,
                senha
            }
        };


        bancoDeDados.contas.push(novaConta);

        return res.status(201).json(novaConta);
    } catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = {
    listarContas,
    criarContas
};