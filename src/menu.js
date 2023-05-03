import elementFactory from "./factory";
import classicPizza from './assets/pizza-classic.jpg';
import mediterraneanPizza from "./assets/pizza-mediterranea.jpg";
import golosePizza from './assets/pizza-golose.jpg';
import especialiPizza from './assets/pizza-speciali.jpg';
import cremebuleDessert from './assets/cremebrulee.jpg';
import profiteroleDessert from './assets/profiteroles.jpg';

const classic = new Image(250);
classic.src = classicPizza;
const mediterranean = new Image(250);
mediterranean.src = mediterraneanPizza;
const golose = new Image(250);
golose.src = golosePizza;
const especiali = new Image(250);
especiali.src = especialiPizza;
const cremebule = new Image(250);
cremebule.src = cremebuleDessert;
const profiterole = new Image(250);
profiterole.src = profiteroleDessert;

export default function renderMenu   () {
    const container = document.querySelector('#content');

    // Menu Div
    const menu = elementFactory('menu', '', 'hide');
    container.appendChild(menu);

    // Menu elements
    const pizzas = elementFactory('header-menu', 'Pizzas');
    container.appendChild(pizzas);
    const pizza1 = elementFactory('menu-elements', 'Classic');
    menu.appendChild(pizza1);
    pizza1.appendChild(classic);
    const pizza2 = elementFactory('menu-elements', 'Mediterranean');
    menu.appendChild(pizza2);
    pizza2.appendChild(mediterranean);
    const pizza3 = elementFactory('menu-elements', 'Golose');
    menu.appendChild(pizza3);
    pizza3.appendChild(golose);
    const pizza4 = elementFactory('menu-elements', 'Especiali');
    menu.appendChild(pizza4);
    pizza4.appendChild(especiali);
    // const desserts = elementFactory('menu-elements', 'Desserts');
    // menu.appendChild(desserts);
    const dessert1 = elementFactory('menu-elements', 'Cremebule');
    menu.appendChild(dessert1);
    dessert1.appendChild(cremebule);
    const dessert2 = elementFactory('menu-elements', 'Profiterole');
    menu.appendChild(dessert2);
    dessert2.appendChild(profiterole);

    return { menu };
  }