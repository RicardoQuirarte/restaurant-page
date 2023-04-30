export default function renderContact   () {
    const container = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.classList.add('contact-page', 'hide');
    contact.textContent = 'For more information about the pizzeria please call 2281170086';
    container.appendChild(contact);

    return { contact };

  }