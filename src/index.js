import "./style.css";
import renderInitialPage from "./initial-page";
import renderContact from "./contact";
import renderMenu from "./menu";


const initialPageContent = renderInitialPage();
const contactPage = renderContact();
const menuPage = renderMenu();

menuPage.body.addEventListener('click', () =>{
    
})



initialPageContent.home.addEventListener('click', () => {
    menuPage.body.classList.replace('show', 'hide');
    contactPage.contact.classList.replace('show', 'hide');
    initialPageContent.body.classList.replace('hide', 'show');
});

initialPageContent.menu.addEventListener('click', () => {
    initialPageContent.body.classList.replace('show', 'hide');
    contactPage.contact.classList.replace('show', 'hide');
    menuPage.body.classList.replace('hide', 'show');
});

initialPageContent.contact.addEventListener('click', () => {
    initialPageContent.body.classList.replace('show', 'hide')
    menuPage.body.classList.replace('show', 'hide')
    contactPage.contact.classList.replace('hide', 'show');
});