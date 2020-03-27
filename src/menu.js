import menupic from './images/menu.jpg';

const menu = () => {
    const menuImage = document.createElement('img');
    menuImage.src = menupic;
    menuImage.setAttribute('class', 'menuimage col-md-6 m-5');
    document.body.appendChild(menuImage);
}

export default menu;