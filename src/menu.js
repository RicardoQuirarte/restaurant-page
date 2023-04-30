import elementFactory from "./factory";

export default function renderMenu   () {
    const container = document.querySelector('#content');

    // Menu Div
    const menu = elementFactory('menu', '', 'hide');
    container.appendChild(menu);

    // Menu elements
    const pizzas = elementFactory('menu-elements', 'Pizzas');
    menu.appendChild(pizzas);
    const pizza1 = elementFactory('menu-elements', 'Classica');
    menu.appendChild(pizza1);
    const pizza2 = elementFactory('menu-elements', 'Mediterranea');
    menu.appendChild(pizza2);
    const pizza3 = elementFactory('menu-elements', 'Golose');
    menu.appendChild(pizza3);
    const pizza4 = elementFactory('menu-elements', 'Especiali');
    menu.appendChild(pizza4);
    const desserts = elementFactory('menu-elements', 'Desserts');
    menu.appendChild(desserts);
    const dessert1 = elementFactory('menu-elements', 'Cremebule');
    menu.appendChild(dessert1);
    const dessert2 = elementFactory('menu-elements', 'Profiterole');
    menu.appendChild(dessert2);

    return { menu };
  }