const pessoas = [
    { name: "Marcus", idade: 34, ocupacional: "Estudante" },
    { name: "Maria", idade: 20, ocupacional: "Estudante" },
    { name: "Adalberto", idade: 34, ocupacional: "Aposentado" },
    { name: "Luan", idade: 15, ocupacional: "Jornal" },
    { name: "Roberto", idade: 22, ocupacional: "Estudante" },
    { name: "Big", idade: 55, ocupacional: "Estudante" },
    { name: "Small", idade: 22, ocupacional: "Estudante" },
]
let valorBuscado = 22;

//Metodo FIND--------------------------------------------->
/*const resultado1 = pessoas.find(pessoa => pessoa.name === valorBuscado); //{ name: 'Big', idade: 55, ocupacional: 'Estudante' } OBJETO
console.log(resultado1);*/
//METODO FILTER--------------------------------------------->
/*const resultado2 = pessoas.filter((pessoa, id, pessoas) => pessoa.name === valorBuscado);//[ { name: 'Big', idade: 55, ocupacional: 'Estudante' } ] ARRAY
console.log(resultado2);
const resultado3 = pessoas.filter(pessoa => pessoa.idade === valorBuscado);// ARRAY
if (resultado3.length === 0) {
    console.log('No tem');
} else {
    console.log(`Existe ${resultado3}`);
}

const resultado4 = pessoas.filter(pessoa => pessoa.ocupacional === valorBuscado);// ARRAY
console.log(resultado3);*/