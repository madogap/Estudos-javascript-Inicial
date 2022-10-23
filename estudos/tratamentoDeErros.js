/* Tratamento de erros 
Throw e return
Apresentação do Try/Catch
Finaly*/

function verificaPalindromo(string) {
    if (!string) return "String Inválida";
    //com THROW E O METODO VERIFICAPALINDROMO DA ERRO TROCANDO PARA RETURN COM METEDO VAZIO DA CERTO

    return string === string.split('').reverse().join('');

}
verificaPalindromo(''); //thorw e return e aqui com string da true
//TRY CATCH
function verificaPalindromo(string) {
    if (!string) throw "tryCatchExemplo";
    return string === string.split('').reverse().join('');
}
function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch (e) {
        console.log(e)
    }
}
tryCatchExemplo(''); 


function verificaPalindromo(string) {
    if (!string) throw "No momento sua string é inválida";
    return string === string.split('').reverse().join('');
}
function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)

    }
    catch (e) {
        throw e;
    }
    finally {
        console.log('A string enviada foi: ' + string);
    }

}
tryCatchExemplo('');