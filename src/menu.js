import menupic from './images/menu.jpg';

const menu = () => {
  const menuImage = document.createElement('img');
  menuImage.src = menupic;
  const bodyElem = document.querySelector('.bodyelem');
  bodyElem.appendChild(menuImage);
  menuImage.setAttribute('class', 'menuimage col-md-6 m-5');
  menuImage.style.display = 'none';
};

const displayHome = e => {
  e.preventDefault();
  const showMenu = document.querySelector('.menuimage');
  const showPage = document.querySelector('.mainpage');
  const showContact = document.querySelector('.contact');
  showMenu.classList.replace('d-block', 'd-none');
  showPage.classList.add('d-block');
  showContact.classList.replace('d-block', 'd-none');
};

const displayMenu = e => {
  e.preventDefault();
  const showMenu = document.querySelector('.menuimage');
  const showPage = document.querySelector('.mainpage');
  const showContact = document.querySelector('.contact');
  showMenu.classList.add('d-block');
  showPage.classList.replace('d-block', 'd-none');
  showContact.classList.replace('d-block', 'd-none');
};

const displayContact = e => {
  e.preventDefault();
  const showContact = document.querySelector('.contact');
  const showPage = document.querySelector('.mainpage');
  const showMenu = document.querySelector('.menuimage');
  showPage.classList.replace('d-block', 'd-none');
  showMenu.classList.replace('d-block', 'd-none');
  showContact.classList.add('d-block');
};

export {
  menu, displayMenu, displayContact, displayHome
};
