//задание 1
let a = 1, b = 1, c, d;
/*
Выводится 2, потому что префиксная форма инкремента увеличивает `a` на единицу и возвращает увеличенное число, теперь а = 2.
*/
c = ++a;
console.log(c);

/*
Переменная `d` хранит значение 1, потому что постфиксная форма инкремента возвращает исходное значение `b`, а уже потом увеличивает его на единицу, поэтому выведено значение 1, но теперь b = 2.
*/
d = b++;
console.log(d);

/*
Переменная `c` равна 5, т.к. ++а это 3 (в 6 строке `а` стало 2 и здесь увеличилась на 1) c = 2 + 3 = 5.
В 28 строке а = 3.
*/
c = 2 + ++a;
console.log(c);

/*
Переменная `d` хранит значение 4, потому что `b++` сначала возвращает исходное значение 2 (из строки 12), а потом увеличивает на единицу и в 29 строке b = 3.
*/
d = 2 + b++;
console.log(d);

console.log(a);
console.log(b);

//задание 2

"use strict";

a = 2;
let x = 1 + (a *= 2);

/*
(a *= 2) значит а = а * 2, будет 2 * 2 = 4.
х = 1 + 4 = 5. Так получаем х = 5, а = 4.
 */
console.log(x);
console.log(a);

//задание 3

a = +prompt('Введите число а');
b = +prompt('Введите число b');

if (a > 0 && b > 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    console.log(a + b);
};

//задание 3

// Сложение
let sum = (number1, number2) => number1 + number2;
console.log(sum(2, 6));//выводит 8

// Разность
function diff(number1, number2) {
    if (number1 > number2) {
        return number1 - number2;
    } else if (number1 < number2) {
        return number2 - number1;
    } else {
        return 0;
    }
} 
console.log(diff(2, 6));//выводит 4
console.log(diff(2, 2));//выводит 0

// Умножение
let multiplication = (number1, number2) => number1 * number2;
console.log(multiplication(2, 6));//выводит 12

// Деление
let division = (number1, number2) => number1 / number2;
console.log(division(2, 6));//выводит 0,333333

// задание 5

function declinationOfNumber(count, one, two, five) {
    let units = count % 10;
    let tens = count % 100;
    if (units === 1 && tens !== 11) {
        return (count +' '+ one);
    } else if ((units > 1 && units < 5) && (tens !== 12 && tens !== 13 && tens !== 14)){
        return (count +' '+ two);
    } else {
        return (count +' '+ five);
    }
}
// тестирование кода
console.log('У меня есть ' + declinationOfNumber(123, "яблоко", "яблока", "яблок"));//У меня есть 123 яблока
console.log('У меня есть ' + declinationOfNumber(111, "яблоко", "яблока", "яблок"));//У меня есть 111 яблок
console.log('У меня есть ' + declinationOfNumber(1, "яблоко", "яблока", "яблок"));//У меня есть 1 яблоко