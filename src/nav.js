//import * as url from './images/logo.jpeg';
import food1  from './images/food1.jpg';

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

    const home = document.createElement('a');
    home.innerHTML = 'Home';

    const menu = document.createElement('a');
    menu.innerHTML = 'Menu';

    const contact = document.createElement('a');
    contact.innerHTML = 'Contact';

    document.body.append(navBrand, nav);
    navBrand.appendChild(logoImage);
    nav.append(headName, home, menu, contact);
};

export default logo;