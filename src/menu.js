import menuData from '../data/menu.json';

import shoyuImg from '../assets/shoyu-ramen.jpg';
import kitsuneImg from '../assets/kitsune-udon.webp';
import duckSobaImg from '../assets/duck-soba.jpg';
import shioImg from '../assets/shio-ramen.jpg';

const imageMap = {
    'shoyu-ramen.jpg': shoyuImg,
    'kitsune-udon.webp': kitsuneImg,
    'duck-soba.jpg': duckSobaImg,
    'shio-ramen.jpg': shioImg
};

function displayMenu() {
    const content = document.getElementById('content');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('menu-header');
    menuHeader.innerHTML = "Menu";
    menuContainer.appendChild(menuHeader);

    menuData.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item');

        itemCard.innerHTML = `
            <img src="${imageMap[item.image]}" alt="${item.name}" class="menu-item-image">
            <h3 class="menu-item-name">${item.name}</h3>
            <p class="menu-item-description">${item.description}</p>
            <p class="menu-item-price">${item.price}</p>
        `;

        menuContainer.appendChild(itemCard);
    });


    contentContainer.appendChild(menuContainer);
    content.appendChild(contentContainer);   

}

export { displayMenu }