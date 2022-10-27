/*
Primitivos (imutáveis) String, Number, boolean, undefined, null(bigint, symbol)- valores são copiados

Referência (Mutáveis)-Array, Object, Function - Passados por Referência
*/
let n = 'Luiz';

n = 'MARCUS';
console.log(n);//MARCUS
console.log(n[0]);//M

let a1 = 'A';
let b2 = 'a';
console.log(a1, b2);//A a

let a = [1, 2, 3];
let b = [...a];//expreti
let c = b;
console.log(a, b);//[ 1, 2, 3 ] [ 1, 2, 3 ]
 // inseri um elemento
a.push(4);
console.log(a, b);//[ 1, 2, 3, 4 ] [ 1, 2, 3 ]
// remove o ultimo elemteo
b.pop(); 
console.log(a, b);//[ 1, 2, 3, 4 ] [ 1, 2 ]
a.push('Luiz');
console.log(c);//[ 1, 2 ]
 //ARRAY SÃO []
 //OBJETOS SÃO {}
const aa = {
    nome: 'Luiz',
    sobrenome: 'Augusto'
};

const bb = {...aa};
aa.nome = 'Vicete';
console.log(bb);//{ nome: 'Luiz', sobrenome: 'Augusto' }
bb.nome = 'João';
console.log(aa);//{ nome: 'Vicete', sobrenome: 'Augusto' }
console.log(bb);//{ nome: 'João', sobrenome: 'Augusto' }