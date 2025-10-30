import Noodles from '../assets/noodles.png';
import reviewTxt from '../data/review.txt';
import hoursData from '../data/hours.json';

function displayHome() {

    const content = document.getElementById('content');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    
    // LOGO
    const myImg = new Image();
    myImg.src = Noodles;
    myImg.id = "logo";

    contentContainer.appendChild(myImg);
    // NAME
    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = "Tojo's Noodle Bar";
    restaurantName.id = "restaurantName";

    contentContainer.appendChild(restaurantName);
    // REVIEW
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container');
    
    const review = document.createElement('p');
    review.textContent = reviewTxt;
    review.id = "review";

    const reviewAuthor = document.createElement('p');
    reviewAuthor.innerHTML = "-Toji";
    reviewAuthor.id = "reviewAuthor";
    
    reviewContainer.appendChild(review);
    reviewContainer.appendChild(reviewAuthor);

    contentContainer.appendChild(reviewContainer);

    // HOURS
    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');

    const hoursHeader = document.createElement('h2');
    hoursHeader.innerHTML = "Hours";
    hoursHeader.classList.add('hours-header');
    hoursContainer.appendChild(hoursHeader);

    for(const key in hoursData) {
        if(hoursData.hasOwnProperty(key)) {
            const day = document.createElement('p');
            day.classList.add('day');
            day.innerHTML = `${key}: ${hoursData[key]}`;
            hoursContainer.appendChild(day);
        }
    }

    contentContainer.appendChild(hoursContainer);
    
    content.appendChild(contentContainer);
}

export { displayHome }