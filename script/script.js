function validaCPF(cpf) {
    console.log(cpf.length);
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

// function validacaoEmail() {
//     let email = document.forms['container']['email'].value;
//     if (!email) {
//         document.getElementById('erroEmail').style.display = 'block';
//         document.getElementById('erroBlocoEmail').style.border = '.1875rem solid red';
//         return false;
//     } else {
//         document.getElementById('erroEmail').style.display = 'none';
//         document.getElementById('erroBlocoEmail').style.border = 'none';
//         return true;
//     }
// }

// function validacaoIdentidade() {
//     let id = document.forms['container']['identidade'].value;
//     if (!id) {
//         document.getElementById('erroId').style.display = 'block';
//         document.getElementById('erroBlocoId').style.border = '.1875rem solid red';
//         return false;
//     } else {
//         document.getElementById('erroId').style.display = 'none';
//         document.getElementById('erroBlocoId').style.border = 'none';
//         return true;
//     }
// }

// function validacaoNascimento() {

//     let dia = document.getElementById('dia');
//     let mes = document.getElementById('mes');
//     let ano = document.getElementById('ano');
//     let aux = dia.options[dia.selectedIndex].text;
//     let aux2 = mes.options[mes.selectedIndex].text;
//     let aux3 = ano.options[ano.selectedIndex].text;
//     if (!aux || !aux2 || !aux3) {
//         document.getElementById('erroNascimento').style.display = 'block';
//         document.getElementById('dataNascimento').style.border = '.1875rem solid red';
//         return false;
//     } else {
//         document.getElementById('erroNascimento').style.display = 'none';
//         document.getElementById('dataNascimento').style.border = 'none';
//         return true;
//     }
// }

const validaCEP = (cep) => cep.toString().length == 8;

const buscaCEP = async () => {
    LimpaEndereco();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (validaCEP(cep)) {
        const data = await fetch(url);
        const endereco = await data.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('erroCEP').style.display = 'block';
            document.getElementById('erroBlocoCEP').style.border = '.1875rem solid red';
        } else {
            document.getElementById('erroCEP').style.display = 'none';
            document.getElementById('erroBlocoCEP').style.border = 'none';
            completaEndereco(endereco);
        }
    } else {
        document.getElementById('erroCEP').style.display = 'block';
        document.getElementById('erroBlocoCEP').style.border = '.1875rem solid red';
    }
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

function check_form() {
    var valid = true;

    if (!validacaoCPF() || !buscaCEP()) { valid = false; }

    if (!valid) {
        alert('Por favor, preencha todos os campos corretamente.');
        return false;
    } else { return true; }
}