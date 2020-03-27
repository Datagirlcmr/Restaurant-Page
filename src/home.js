import food3 from './images/food3.jpg';

const home = () => {
    const bodyElem = document.createElement('div');
    bodyElem.setAttribute('class', 'd-flex ml-auto');

    const content = document.createElement('div');
    content.setAttribute('class', 'jumbotron m-5 col-md-6');

    const bodyText = document.createElement('h3');
    bodyText.setAttribute('class', 'text-center text-danger')

    const button = document.createElement('button');
    button.setAttribute('class', 'btn btn-success m-5');
    button.innerHTML = 'Explore our Menu';


    const btncontact = document.createElement('button');
    btncontact.setAttribute('class', 'btn btn-primary m-5');
    btncontact.innerHTML = 'Contact Us';
    
    bodyText.innerHTML = 'Chez Bibih offers a variety of mouth watering dishes at affordable prices';
   

    const bodyImage = document.createElement('div');
    bodyImage.setAttribute('class', 'col-md-4');

    const foodImage = document.createElement('img');
    foodImage.src = food3;
    foodImage.setAttribute('class', 'col-md-12')
    

    document.body.appendChild(bodyElem);
    bodyElem.append(bodyImage, content);
    content.append(bodyText, button, btncontact);
    bodyImage.appendChild(foodImage);
    
    
}

export default home;
