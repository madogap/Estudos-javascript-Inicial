const cliente = {
    nome: 'Cezar',
    login: 'cezarrphp',
    senha: '1234',
    conta: 'AX23',
    saldo: 33.22
}
let add_dinheiro = function (valor) {
    cliente.saldo = cliente.saldo + valor;
}
let remove_dinherio = function (valor) {
    cliente.saldo = cliente.saldo - valor;
}
let consultar_saldo = function () {
    console.log('Saldo: ' + cliente.saldo);
}
let consultar_cliente = function () {
    console.log('Nome: ' + cliente.nome);
    console.log('Login: ' + cliente.login);
    console.log('Senha: ' + cliente.senha);
    console.log('Conta: ' + cliente.conta);
    console.log('Saldo: ' + cliente.saldo);
}
console.log(typeof cliente);
consultar_cliente();
consultar_saldo();
add_dinheiro(3);
consultar_saldo();
remove_dinherio(150);
consultar_cliente();

