/*
Primitivos (imutáveis) String, Number, boolean, undefined, null(bigint, symbol)- valores são copiados

Referência (Mutáveis)-Array, Object, Function - Passados por Referência
*/
let n = 'Luiz';

n = 'MARCUS';
console.log(n);
console.log(n[0]);

let a1 = 'A';
let b2 = 'a';
console.log(a1, b2);

let a = [1, 2, 3];
let b = [...a];//expreti
let c = b;
console.log(a, b);
 // inseri um elemento
a.push(4);
console.log(a, b);
// remove o ultimo elemteo
b.pop(); 
console.log(a, b);
a.push('Luiz');
console.log(c);
 //ARRAY SÃO []
 //OBJETOS SÃO {}
const aa = {
    nome: 'Luiz',
    sobrenome: 'Augusto'
};

const bb = {...aa};
aa.nome = 'Vicete';
//console.log(bb);
bb.nome = 'João';
console.log(aa);
console.log(bb);