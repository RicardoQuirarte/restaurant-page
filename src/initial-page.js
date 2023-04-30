import elementFactory from "./factory";
// import logo from './assets';**

export default function renderInitialPage   () {
  const container = document.querySelector('#content');

  // DOM creating elements
  const header = elementFactory('header');
  container.appendChild(header);
  const body = elementFactory('body', '', 'show');
  container.appendChild(body);
  const footer = elementFactory('footer');
  container.appendChild(footer);

  // Header
  const home =  elementFactory('header-element', 'home');
  const menu = elementFactory('header-element', 'menu');
  const contact = elementFactory('header-element', 'contact');
  header.appendChild(home);
  header.appendChild(menu);
  header.appendChild(contact);

  // Body


  // const mylogo = new Image();**
  // mylogo.src = logo;**


  const logo = elementFactory('body-element', '', 'logo');
  const description = elementFactory('body-element', 'The placer of eating pizza');
  const someText = elementFactory('body-element', 'Expect soon our new location in Mexico!');
  body.appendChild(logo);
  body.appendChild(description);
  body.appendChild(someText);

  // Footer
  const footerText = elementFactory('footer', 'Developed by Ricardo Quirarte');
  footer.appendChild(footerText);

  return { contact, body, menu, home }
}