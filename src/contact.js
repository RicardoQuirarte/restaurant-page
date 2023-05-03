import elementFactory from "./factory";

export default function renderContact() {
    const container = document.querySelector('#content');
  
    // Contact Div
    const contact = elementFactory('contact-page', '', 'hide');
    container.appendChild(contact);

    // Contact elements
    const info = elementFactory('contact-elements', 'Born in 1953 from Bottega Cibi Cotti in the eponymous street, Spontini is now a chain of over 30 pizzerias in Italy and abroad. Well known for its high slice, crispy base, and the use of 0 km ingredients. For more information about the pizzeria please call 2281170086');
    contact.appendChild(info);
    
    return { contact };
  }