const Candidato = require('../models/cadidato');

module.exports = {
    async register(req, res) {
        const { nome, cargo, dia, mes, ano, estadoCivil, genero, cep, endereco, numResidencia,
            bairro, cidade, estado, telefone, celular, email, identidade, cpf, possuiveiculo,
            categoriasHabilitacao } = req.body;

        const novoCandidato = new Candidato();

        novoCandidato.nome = nome;
        novoCandidato.cargo = cargo;
        novoCandidato.dia = dia;
        novoCandidato.mes = mes;
        novoCandidato.ano = ano;
        novoCandidato.estadoCivil = estadoCivil;
        novoCandidato.genero = genero;
        novoCandidato.cep = cep;
        novoCandidato.endereco = endereco;
        novoCandidato.numResidencia = numResidencia;
        novoCandidato.bairro = bairro;
        novoCandidato.cidade = cidade;
        novoCandidato.estado = estado;
        novoCandidato.telefone = telefone;
        novoCandidato.celular = celular;
        novoCandidato.email = email;
        novoCandidato.identidade = identidade;
        novoCandidato.cpf = cpf;
        novoCandidato.possuiveiculo = possuiveiculo;
        novoCandidato.categoriasHabilitacao = categoriasHabilitacao;

        novoCandidato.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            return res.status(200).send(savedCandidate);
        });
    }
}