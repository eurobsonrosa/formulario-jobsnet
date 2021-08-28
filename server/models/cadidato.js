const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    dia: { type: Number, unique: false, required: true },
    mes: { type: String, unique: false, required: true },
    ano: { type: Number, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: false },
    genero: { type: String, unique: false, required: false },
    cep: { type: Number, unique: false, required: true },
    endereco: { type: String, unique: false, required: true },
    numResidencia: { type: Number, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: true },
    telefone: { type: Number, unique: false, required: false },
    celular: { type: Number, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    identidade: { type: String, unique: false, required: true },
    cpf: { type: Number, unique: true, required: true },
    possuiveiculo: { type: String, unique: false, required: false },
    categoriasHabilitacao: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidato', CandidateSchema);