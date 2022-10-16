var myObj = {
    name: 'Marcus',
    age: 21,
    address: 'Rua Joaquim Neto',
    numberAddress: 5543,
    county: 'Beleza Pura',
    state: 'Bahia',
    country: 'Brasil'
};
delete myObj.address;
console.log(myObj);
var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num -= 2;
num * 3;
num % 3;

console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:Jonh}', typeof { name: 'Jonh' });
console.log('----------------------');
console.log('num ==1 : ' + (num == 1)); //3
console.log('num==1 : ' + (num === 1));
console.log('num !=1 : ' + (num != 1));
console.log('num >1 : ' + (num > 1));
console.log('num <1 : ' + (num < 1));
console.log('num >=1 : ' + (num >= 1));
console.log('num <=1 : ' + (num <= 1));
console.log('true && false: ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));
console.log('5 & 1:', (5 & 1)); //1 e
console.log('5 | 1:', (5 | 1)); //5 ou
console.log('~ 5:', (~5));
console.log('5 ^1 :', (5 ^ 1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1));
var num = 1;
num = 3;
var price = 1.5;
var myName = 'Packr';
var trueValue = true;
var nullVar = null;
var und;
console.log('------------------------------');
console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);

var myVar = 'Global';
myOtherVar = 'Global';

function myFunction() {
    var myVar = 'Local';
    return myVar;
}
function myOtheFunction() {
    myOtherVar = 'Local';
    return myOtherVar;
}

console.log('------------------------------------------');
console.log('Está variável é de escopo: ' + myOtherVar);
console.log('Está variável é de escopo: ' + myFunction());
console.log('Está variável é de escopo: ' + myOtherVar);
console.log('Está variável é de escopo: ' + myOtheFunction());
console.log('Está variável é de escopo: ' + myOtherVar);

//True || False

function testTruthy(val) {
    return val ? console.log('Truthy') : console.log('Falsy');
}

console.log('--------------------------------------------');
testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false)); //Objeto sempre é true
testTruthy('');
testTruthy('Packt');
testTruthy(new String('')); // Objeto true
testTruthy(1);
testTruthy(-1);
testTruthy(NaN);
testTruthy(new Number(NaN));//OBJETO TRUE
testTruthy({}); //OBJETO
var obj = { name: 'Tanus' };
testTruthy(obj);
testTruthy(obj.name);
testTruthy(obj.age);//Propriedade não existe*/

console.log('---------------------------');
console.log('packt' ? true : false);//true
console.log('packt' == true);//false
console.log('packt' == false);//false
console.log('packt' === true);//false
console.log('packt' === 'packt');//true
var per1 = { name: 'John' };
var per2 = { name: 'John' };
console.log(per1 === per2); //false objetos diferentes


const [first, second, re] = [1, 2, 3];
console.log(first, second, re);


