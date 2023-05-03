import elementFactory from "./factory";
import classicPizza from './assets/pizza-classic.jpg';
import mediterraneanPizza from "./assets/pizza-mediterranea.jpg";
import golosePizza from './assets/pizza-golose.jpg';
import especialiPizza from './assets/pizza-speciali.jpg';
import cremebuleDessert from './assets/cremebrulee.jpg';
import profiteroleDessert from './assets/profiteroles.jpg';

const classic = new Image(275);
classic.src = classicPizza;
const mediterranean = new Image(275);
mediterranean.src = mediterraneanPizza;
const golose = new Image(275);
golose.src = golosePizza;
const especiali = new Image(275);
especiali.src = especialiPizza;
const cremebule = new Image(275);
cremebule.src = cremebuleDessert;
const profiterole = new Image(275);
profiterole.src = profiteroleDessert;

export default function renderMenu   () {
    const container = document.querySelector('#content');

    // Menu Div
    const menu = elementFactory('menu', '', 'hide');
    container.appendChild(menu);

    // Menu elements
    const pizzas = elementFactory('headers-menu', 'Pizzas');
    menu.appendChild(pizzas);

    const containerDiv = elementFactory('container-div');
    menu.appendChild(containerDiv);
    const pizza1 = elementFactory('menu-elements', 'Classic');
    containerDiv.appendChild(pizza1);
    pizza1.appendChild(classic);
    const pizza2 = elementFactory('menu-elements', 'Mediterranean');
    containerDiv.appendChild(pizza2);
    pizza2.appendChild(mediterranean);
    const pizza3 = elementFactory('menu-elements', 'Golose');
    containerDiv.appendChild(pizza3);
    pizza3.appendChild(golose);
    const pizza4 = elementFactory('menu-elements', 'Especiali');
    containerDiv.appendChild(pizza4);
    pizza4.appendChild(especiali);

    const desserts = elementFactory('headers-menu', 'Desserts');
    menu.appendChild(desserts);

    const containerDiv2 = elementFactory('container-div');
    menu.appendChild(containerDiv2);
    const dessert1 = elementFactory('menu-elements', 'Cremebule');
    containerDiv2.appendChild(dessert1);
    dessert1.appendChild(cremebule);
    const dessert2 = elementFactory('menu-elements', 'Profiterole');
    containerDiv2.appendChild(dessert2);
    dessert2.appendChild(profiterole);

    return { menu };
  }