import menupic from './images/menu.jpg';

const menu = () => {
    const menuImage = document.createElement('img');
    menuImage.src = menupic;
    document.body.appendChild(menuImage);
    menuImage.setAttribute('class', 'menuimage col-md-6 m-5');
    menuImage.style.display = 'none';
}

const displayMenu = () => {
    document.querySelector('.menuimage').style.display ='block';
    document.querySelector('.mainpage').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
}

const displayContact = () => {
    document.querySelector('.menuimage').style.display ='none';
    document.querySelector('.mainpage').style.display = 'none';
    document.querySelector('.contact').style.display = 'block';
}



export {menu, displayMenu, displayContact};
