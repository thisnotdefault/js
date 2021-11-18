"use strict";
/* 
Разметка товара:

<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div>
*/

const products = {
    phones: [{
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [{
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [{
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

let div = document.querySelector('.products');
let btns = document.querySelectorAll('button');


btns.forEach(function (btn) {
    btn.addEventListener('click', clickHandler);
});


function clickHandler(event) {
    div.innerHTML = "";
    showCategory(event.target.getAttribute('data-type'));
}


function showCategory(category) {
    let productsData = products[category];
    let resultHtml = "";
    productsData.forEach(function (product) {
        resultHtml += getProductMarkup(product);
    });

    div.insertAdjacentHTML('afterbegin', resultHtml);
}


function getProductMarkup(product) {
    return `<div class="product">
    <div>${product.name}</div>
    <img src="${product.imageUrl}" alt="">
    <div>${product.price}</div>
    <a href="https://example.com/producs/${product.id}">Подробнее</a>
</div>`;
}