/* Paradigmas imperativo (Procedural, Object Oriented, Parallei Processing) ou declarativo (Logic ,DataBase como SQL, Dataflow) da programação e Pilares da Orientação a Obejtos---Pilares 
-Herança(OBEJTO FILHOS QUE HERDA PROPRIEDADES E MÉTODOS)
-Polimorfismo(PODEM HERDA A MESMA CLASSE PAI, MAS SE COMPORTATEM DE FORMA DIFERENTE QUANDO INVOCAMOS SEUS MÉTODOS)
-Encapsulamento(CADA CLASSE TEM PROPRIEDADES E MÉTODOS INDEPENDENTES DO RESTANTE DO CÓDIGO)
EX: class {
    data members 
    +
    methods (behavior)
}
-Abstração VEICULO->VEICULO DE RODAS-(CARRO BICICLETA...)

PROTÓTIPOS E CADEIA DE PROTÓTIPOS
APRESENTAR A ESTRUTURA DE CLASSSES EM JAVASCRIPT
PROTÓTIPOS TODOS OS OBJETOS JS HERDAM PROPRIEDADES E MÉTODOS DE UM PROTOTYPE
O OBJETO Object.prototype ESTÁ NO TOPO DESTA CADEIA
Object.prototype = null <= Object(){} <= Function.prototype.constructor <= Function <= Animal.constructor <= Bird <= Crow

CLASSES

JS NÃO POSSUI CLASSES NATIVAMENTE.TODAS AS CLASSES SÃO OBJETOS E A HERANÇA SE DÁ POR PROTÓTIPOS


class Animal {
    constructor(type = 'vida'){
        this.type = type;
    }
    get type(){
        return this._type;
    }
    set type(val){
        this._type = val.toUpperCase();
    }
    makeSound(){
        console.log('Making animal Sound');
    }
}

let a = new Animal();
console.log(a.type);

class Cat extends Animal {
    constructor(){
        super('cat'); //HERANÇA
    }
    makeSound(){
        super.makeSound();
        console.log('Meow');
    }
}

let b = new Cat()
console.log(b.type)
*/
//ATIVIDADE CONTA BACÁRIA

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada, você não tem saldo sufuciente para fazer essas transação, pois saldo é de: " + this._saldo;
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';

    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }
    sacar(valor) {
        if (valor > 500) {
            return "Operação Negada, pois seu maximo de saque permitido é de $500!"
        }
        this._saldo = this._saldo - valor;
    }
}