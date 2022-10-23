//new Erro (nessage, fileName, lineNumber)
//Todos os parametros sao opcionais
/*new Error (message, fileName, lineNUmber);
const meuErro= new Error('Mensagem invalida');
throw meuErro;*/

// Dando um nome para o erro 
const MeuErro = new Error('Menasgem invalidadadad');
MeuErro.name = 'invaldMessageTroqueOErro' //CRIANDO A Propriedade NAME 
throw MeuErro;                                                 //STACK SIGNIFICA PILHA
