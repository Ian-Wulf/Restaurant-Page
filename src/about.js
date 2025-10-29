
function displayAbout() {
    const content = document.getElementById('content');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');

    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');

    aboutSection.appendChild(aboutText);
    contentContainer.appendChild(aboutSection);

    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    
    contentContainer.appendChild(contactSection);


    content.appendChild(contentContainer); 

}

export { displayAbout }