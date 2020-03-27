
const contact = () => {
   const contactUs = document.createElement('div');
   contactUs.setAttribute('class', 'jumbotron contact');
   contactUs.innerHTML = 'We are open Mondays to Sundays <br> 8am - 8pm <br> call us on +237 6704441197'; 
   document.body.appendChild(contactUs);
   contactUs.style.display = 'none';
};

export default contact;