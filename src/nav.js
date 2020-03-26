import * as url from './images/logo.jpeg';

const logo = () => {
    const nav = document.createElement('nav')
    const logoImage = document.createElement('img');
    logoImage.classList.add('logoimage');
    logoImage.src = url.default;

    const headName = document.createElement('h1');
    headName.innerHTML = 'Chez Bibih';

    document.body.appendChild(nav);
    nav.append(logoImage, headName);
};

export default logo;