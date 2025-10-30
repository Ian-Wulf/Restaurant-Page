import contactInfo from '../data/contactInfo.json';
import aboutTxt from '../data/about.txt';
import Noodles from '../assets/noodles.png';

function displayAbout() {
    const content = document.getElementById('content');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');

    const aboutPageContainer = document.createElement('div');
    aboutPageContainer.classList.add('about-page-container');

    const myImg = new Image();
    myImg.src = Noodles;
    myImg.id = "logo-about-page";

    aboutPageContainer.appendChild(myImg);

    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');

    const aboutHeader = document.createElement('h2');
    aboutHeader.classList.add('about-header');
    aboutHeader.innerHTML = 'About Our Restaurant';
    aboutSection.appendChild(aboutHeader);

    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.textContent = aboutTxt;
    aboutSection.appendChild(aboutText);
    
    aboutPageContainer.appendChild(aboutSection);

    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');
    
    const contactHeader = document.createElement('h2');
    contactHeader.innerHTML = 'Contact Us';
    contactSection.appendChild(contactHeader);

    const contactInfoDetails = document.createElement('div');
    contactInfoDetails.classList.add('contact-info-details');
    
    contactInfoDetails.innerHTML = `
        <p class="phone">Phone: ${contactInfo.phone}</p>
        <p class="email">Email: ${contactInfo.email}</p>
        <p class="address">Address: ${contactInfo.address}</p>
    `;

    contactSection.appendChild(contactInfoDetails);
    aboutPageContainer.appendChild(contactSection);
    
    contentContainer.appendChild(aboutPageContainer);


    content.appendChild(contentContainer); 

}

export { displayAbout }