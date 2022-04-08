"use strict";

// Задание 1

let number = 0;
console.log(`${number} - это ноль`);

for (number = 1; number <= 10; number++) {
    if (Math.abs(number % 2) === 1) {
        console.log(`${number} - нечётное число`);
    }
    if (Math.abs(number % 2) === 0) {
        console.log(`${number} - чётное число`);
    }
}

// или чуть-чуть по-другому:

for (number = 0; number <= 10; number++) {
    if (number === 0) {
        console.log(`${number} - это ноль`);
    }
    else if (Math.abs(number % 2) === 1) {
        console.log(`${number} - нечётное число`);
    }
    else if (Math.abs(number % 2) === 0) {
        console.log(`${number} - чётное число`);
    }
}

// Задание 2

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);//очень похожи slice и splice, легко запутаться)))
console.log(arr);//(5) [1, 2, 3, 6, 7]

// Задание 3

const randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push (Math.round(Math.random() * 10));
}
console.log(randomArr);
console.log(randomArr.map(item => item ** 2));

// Задание 4

const randomArr2 = [];
for (let i = 0; i < 5; i++) {
    randomArr2.push (Math.round(Math.random() * 10));
}
console.log(randomArr2);
console.log(randomArr2.filter(item => (item !== 3)));
console.log(randomArr2.map(item => +(item * 1.1).toFixed(1)));

// Задание 5

for (let item = 0; item < 10; console.log(item), item++) {
}

// Задание 6

for (let i = 0, x = 'x'; i < 20; i++, x +='x') {
    console.log(`${x}`);
}