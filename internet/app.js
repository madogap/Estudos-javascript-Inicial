/*
MODULO 'FS' TRABALHA COM O ARQUIVOS 
CRIAÇÃO DE UM SERVIDOR
LISTE ESCOLHE QUAL PORTA ENTRA PELO SERVIDOR*/


var http = require('http');
http.createServer(function(req, res){
    res.end("Ola");
}).listen(8081);

console.log("O Servidor rodando!");