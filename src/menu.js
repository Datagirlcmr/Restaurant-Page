import menupic from './images/menu.jpg';

const menu = () => {
    const menuImage = document.createElement('img');
    menuImage.src = menupic;
    document.body.appendChild(menuImage);
    menuImage.setAttribute('class', 'menuimage col-md-6 m-5');
    menuImage.style.display = 'none';
}

const displayMenu = () => {
   const showMenu = document.querySelector('.menuimage')
   const showPage = document.querySelector('.mainpage')
   showPage.replaceWith(showMenu);
   showMenu.style.display = 'block';
   //const showContact =document.querySelector('.contact')
}

const displayContact = () => {
   const showContact = document.querySelector('.contact')
   const showPage = document.querySelector('.mainpage')
   showPage.replaceWith(showContact);
   showContact.style.display = 'block';
}



export {menu, displayMenu, displayContact};
