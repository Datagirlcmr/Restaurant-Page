const footer = () => {
    const copyright = document.createElement('footer');
    copyright.setAttribute('class', 'm-5 text-center text-secondary');
    copyright.innerHTML = 'Datagirl &copy; 2020';
    document.body.appendChild(copyright);
}

export default footer;