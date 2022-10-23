/*Pegando os module das funçoes: SOMAR/SUB/ O REQUIRE PUXA ATRAVES DO MODULE
Tem que atribuir o module a uma require junto com uma função*/

//const somar = require("./somar");
prompt = calcula();
function calcula() {
    const opera = prompt('Escolha : \n 1- Soma(+) \n 2- Subtração(-) \n 3- Multiplicação(*) \n 4- Divisão(/) \n 5- Divisão Inteira(%) \n 6- Expoente(**)');
    let n1 = Number(prompt('Digite um valor: '));
    let n2 = Number(prompt('Digite outro valor: '));
    let resultado;

    if (!opera || opera >= 7) {
        alert('Erro - Operação Invalida');
        calcula();
    } else {




        if (!n1 || !n2) {
            alert('Erro');

        } else {
            function somar() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();

            }

            function sub() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multi() {

                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function div() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function diviiInteiro() {
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }
            function expoente() {
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            }

        }


    }
    function novaOperacao() {

        let opcao = prompt('Deseja fazer outra operação? \n 1-Sim \n 2-Não');

        if (opcao == 1) {
            calcula();

        } else if (opcao == 2) {

            alert('Até mais!');

        } else {

            alert('Digite uma opção valida');
            novaOperacao();
        }
        switch (opera) {
            case 1:
                somar();
                break;
            case 2:
                sub();
                break;
            case 3:
                multi();
                break;
            case 4:
                div();
                break;
            case 5:
                diviInteiro();
                break;
            case 6:
                expoente();
                break;


        }
    }
};
//document.write(somar);

/*var SomaFunc = require("./somar");
var SubFunc = require("./sub");
var DivFunc = require("./div");
var MultiFunc = require("./multi");
var diviInteiro = require("./diviInteiro");
var expoente = require("./expoente");*/
