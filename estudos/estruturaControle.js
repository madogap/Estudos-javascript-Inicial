console.log('-----------IF / ELSE-----------------\n');
var num = 0;
if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log('Num is not equal to 1, the value of num is ' + num);
}
console.log('--------IF / ELSE IF---------------------\n');
var month = 2;
if (month === 1) { //(num===1) ? num-- : num++;
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('March');
} else {
    console.log('Month is not January, February or March');
}
console.log('--------------SWITCH CASE--------------------\n');
var month = 3;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;

    default:
        console.log('Month is not January, February or March');
        break;
}
console.log('------------FOR (VAR I = 0; I<10; I++) ----------------\n');

//Loops
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('---------------------------\n');
/*
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log('----------------------------');
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);*/