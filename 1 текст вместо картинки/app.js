'use strict';
let btns = document.querySelectorAll('button');
btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        handleClick(event);
    });
});

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardNode, 
        img: cardNode.querySelector('img'), 
        productName: cardNode.querySelector('.productName'), 
        button: cardNode.querySelector('button'), 
    };

    let btnText = card.button.innerText;

    if (btnText == 'Подробнее') { 
        showMoreText(card);
    } else if (btnText == 'Отмена') { 
        hideMoreText(card);
    }
}

function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = "Подробнее";

}

function showMoreText(card) {
    card.img.style.display = 'none';
    let textForEl = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
    card.productName.insertAdjacentHTML('afterend', `<div class='desc'>${textForEl}</div>`);
    card.button.innerText = 'Отмена';

}