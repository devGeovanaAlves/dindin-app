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
    let numero = String(bancoDeDados.contas.length + 1);
    const saldo = 0;

    try {
        const cpfExiste = bancoDeDados.contas.find((user) => {
            return user.usuario.cpf === cpf;
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
                cpf,
                data_nascimento,
                telefone,
                email,
                senha
            }
        };


        bancoDeDados.contas.push(novaConta);

        return res.status(201).json(novaConta);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const atualizarContas = async (req, res) => {
    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Precisa altera algum campo' });
        }

        const usuarioEncontrado = bancoDeDados.contas.find((user) => {
            return user.numero === numeroConta;
        });

        if (!usuarioEncontrado) {
            return res.status(404).json({ message: 'Número da conta inválido' });
        }

        if (nome) {
            usuarioEncontrado.usuario.nome = nome;
        }

        if (data_nascimento) {
            usuarioEncontrado.usuario.data_nascimento = data_nascimento;
        }

        if (telefone) {
            usuarioEncontrado.usuario.telefone = telefone;
        }

        if (senha) {
            usuarioEncontrado.usuario.senha = senha;
        }

        if (cpf) {
            const cpfEncontrado = bancoDeDados.contas.find((user) => {
                return user.usuario.cpf === Number(cpf) && user.numero !== Number(numeroConta);
            });

            if (cpfEncontrado) {
                return res.status(400).json({ message: 'CPF já existe' });
            }

            usuarioEncontrado.usuario.cpf = cpf;
        }

        if (email) {
            const emailEncontrado = bancoDeDados.contas.find((user) => {
                return user.usuario.email === email && user.numero !== Number(numeroConta);
            });

            if (emailEncontrado) {
                return res.status(400).json({ message: 'Email já existe' });
            }

            usuarioEncontrado.usuario.email = email;
        }

        return res.status(200).json({ message: 'Conta atualizada com sucesso' });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const excluirContas = async (req, res) => {
    const { numeroConta } = req.params;
    try {
        const usuarioEncontrado = bancoDeDados.contas.find((user) => {
            return user.numero === numeroConta;
        });

        if (!usuarioEncontrado) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        if (usuarioEncontrado.saldo > 0) {
            return res.status(400).json({ message: "Não é possível deletar usuário com saldo na conta" });
        }

        const usuarioDeletado = bancoDeDados.contas.filter((user) => {
            return user.numero !== numeroConta;
        });

        bancoDeDados.contas = [...usuarioDeletado];

        return res.status(200).json({ message: 'Conta excluída com sucesso' });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    listarContas,
    criarContas,
    atualizarContas,
    excluirContas
};