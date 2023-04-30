export default function renderMenu   () {
    const container = document.querySelector('#content');

    const body = document.createElement('div');
    body.classList.add('menu', 'hide');
    body.textContent = 'Pizzas, pastas, desserts and drinks';
    container.appendChild(body);

    return { body };
  }