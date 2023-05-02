import "./style.css";
import renderInitialPage from "./initial-page";
import renderContact from "./contact";
import renderMenu from "./menu";

const initialPageContent = renderInitialPage();
const contactPage = renderContact();
const menuPage = renderMenu();

// Tab-switching logic
initialPageContent.home.addEventListener('click', () => {
    menuPage.menu.classList.replace('show', 'hide');
    contactPage.contact.classList.replace('show', 'hide');
    initialPageContent.body.classList.replace('hide', 'show');
});

initialPageContent.menu.addEventListener('click', () => {
    initialPageContent.body.classList.replace('show', 'hide');
    contactPage.contact.classList.replace('show', 'hide');
    menuPage.menu.classList.replace('hide', 'show');
});

initialPageContent.contact.addEventListener('click', () => {
    initialPageContent.body.classList.replace('show', 'hide')
    menuPage.menu.classList.replace('show', 'hide')
    contactPage.contact.classList.replace('hide', 'show');
});