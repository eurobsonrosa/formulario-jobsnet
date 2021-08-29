function validaCPF(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacaoCPF() {
    let cpf = document.getElementById('cpf').value;

    let resultadoValidacao = validaCPF(cpf);

    if (!resultadoValidacao) {
        document.getElementById('erroCPF').style.display = 'block';
        document.getElementById('erroBlocoCPF').style.border = '.1875rem solid red';
        return false;
    } else {
        document.getElementById('erroCPF').style.display = 'none';
        document.getElementById('erroBlocoCPF').style.border = 'none';
        return true;
    }

}

document.getElementById('cpf').addEventListener('focusout', validacaoCPF);

const validaCEP = (cep) => cep.toString().length == 8;

const buscaCEP = async () => {
    LimpaEndereco();
    let validacao = false;
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (validaCEP(cep)) {
        const data = await fetch(url);
        const endereco = await data.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('erroCEP').style.display = 'block';
            document.getElementById('erroBlocoCEP').style.border = '.1875rem solid red';
            validacao = false;
        } else {
            document.getElementById('erroCEP').style.display = 'none';
            document.getElementById('erroBlocoCEP').style.border = 'none';
            completaEndereco(endereco);
            validacao = true;
        }
    } else {
        document.getElementById('erroCEP').style.display = 'block';
        document.getElementById('erroBlocoCEP').style.border = '.1875rem solid red';
        validacao = false;
    }
    return validacao;
}

document.getElementById('cep').addEventListener('focusout', buscaCEP);

const completaEndereco = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const LimpaEndereco = () => {
    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

const Formulario = () => {
    let form = {
        nome: document.getElementById('nome').value,
        cargo: document.getElementById('cargo').value,
        dia: document.getElementById('dia').value,
        mes: document.getElementById('mes').value,
        ano: document.getElementById('ano').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        genero: document.getElementById('genero').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        numResidencia: document.getElementById('numResidencia').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        identidade: document.getElementById('identidade').value,
        cpf: document.getElementById('cpf').value,
        possuiveiculo: document.getElementById('possuiveiculo').value,
        categoriasHabilitacao: document.getElementById('categoriasHabilitacao').value,
    };
    console.log(form);
    return form
}

const criarCandidato = async (candidato) => {

    const requisicao = await fetch('https://formulariojobsnet-backend.herokuapp.com/registro', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())
    });
    if (requisicao.status === 200) {
        alert('CADASTRO CONCLUÍDO!');
    }

    if (requisicao.status === 500) {
        alert('CPF OU EMAIL JÁ FOI CADASTRADO');
    }
}

function check_form() {
    let nome = document.getElementById('nome').value;
    let cargo = document.getElementById('cargo').value;
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let ano = document.getElementById('ano').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;
    let numResidencia = document.getElementById('numResidencia').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;
    let identidade = document.getElementById('identidade').value;

    if (nome == "" || cargo == "" || dia == "" || mes == "" || ano == "" || cep == "" || endereco == ""
        || numResidencia == "" || bairro == "" || cidade == "" || estado == "" || celular == "" ||
        .length < 4 || identidade == "" || validacaoCPF() == false) {
        alert('Por favor, preencha todos os campos corretamente.');
    } else {
        criarCandidato();
        alert('verificando cadastro...');
    }
}
