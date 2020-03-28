import food1 from './images/food1.jpg';
import { displayMenu, displayContact, displayHome } from './menu';

const logo = () => {
  const nav = document.createElement('div');
  nav.classList.add('navigation');
  const navBrand = document.createElement('div');

  const logoImage = document.createElement('img');
  logoImage.classList.add('logoimage');
  logoImage.src = food1;

  const headName = document.createElement('h1');
  headName.classList.add('welcome');
  headName.innerHTML = 'Welcome to Chez Bibih';

  const home = document.createElement('button');
  home.innerHTML = 'Home';
  home.setAttribute('class', 'btn btn-warning col-md-1');
  home.addEventListener('click', displayHome);

  const menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.setAttribute('class', 'btn btn-warning col-md-1');
  menu.addEventListener('click', displayMenu);

  const contact = document.createElement('button');
  contact.innerHTML = 'Contact';
  contact.setAttribute('class', 'btn btn-warning col-md-1');
  contact.addEventListener('click', displayContact);

  document.body.append(navBrand, nav);
  navBrand.appendChild(logoImage);
  nav.append(headName, home, menu, contact);
};

export default logo;
