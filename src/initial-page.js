export default function renderInitialPage   () {
  const container = document.querySelector('#content');

  // DOM creating elements
  const header = document.createElement('div');
  header.classList.add('header');
  container.appendChild(header);

  const body = document.createElement('div');
  body.classList.add('body');
  container.appendChild(body);

  const footer = document.createElement('div');
  footer.classList.add('footer');
  container.appendChild(footer);

  // Function
  function addElement(text, className) {
    const div = document.createElement('p');
    div.textContent = (text);
    div.classList.add(className);
    return div;
  }

  // Header
  const home =  addElement('home', 'header-element');
  const menu = addElement('menu', 'header-element');
  const contact = addElement('contact', 'header-element');
  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);

  // Body
  const logo = addElement('SPONTINI', 'body-element');
  const description = addElement('The placer of eating pizza', 'body-element');
  const someText = addElement('Expect soon our new location in Mexico!', 'body-element');
  body.appendChild(logo);
  body.appendChild(description);
  body.appendChild(someText);

  // Footer
  const footerText = addElement('Developed by Ricardo Quirarte', 'footer');
  footer.appendChild(footerText);
}