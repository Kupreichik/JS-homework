"use strict";

// задание 1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }

for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

// задание 2

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2, // вывести это число
            },
        },
        {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
            likes: 3,
            dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// задание 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(element => {element.price *= 0.85});
console.log(products);

// задание 4

const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

console.log(products1.filter (product => ("photos" in product) && ((product.photos).length > 0)));

console.log(products1.sort ((product1, product2) => product1.price - product2.price));

// задание 5

const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const weekDays = {};
for (let i = 0; i < en.length; i++) {
    weekDays[en[i]] = ru[i];
}

console.log(weekDays);

// задание 6

const numbers2 = {
    key1: {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    },
    key2: {
    keyin1: 4,
    keyin2: 5,
    keyin3: 6,
    },
};

let sum = 0;

for (const keyin in numbers2.key1) {
    sum += numbers2.key1[keyin];
}
for (const keyin in numbers2.key2) {
    sum += numbers2.key2[keyin];
}
// считаю это решение отвратительным))), но никак не клеится по-другому...Изучаю ваш красивый вариант)
console.log(sum);