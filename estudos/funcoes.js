function sayHello (){
    console.log('Hello');
}
sayHello();

function output(text){
    console.log(text);
}
output('Hello');
output('Other text', 'Hello');

function sum(num1, num2){
    return num1 + num2;

}
var resultado = sum(1, 2);
output(resultado);
var resultado = sum(5, 9);
output(resultado);
var resultado = sum(5, 90);
output(resultado);

function somaDiminuir(result, result2) {

    function sum(num1, num2) {
        return num1 + num2;
    }

    var result = sum(2, 2);
    console.log(result);

    function diminuir(num1, num2) {
        return num1 - num2
    }
    var result2 = diminuir(20, 5);
    console.log(result2);

    return result / result2;
}
console.log(somaDiminuir());


