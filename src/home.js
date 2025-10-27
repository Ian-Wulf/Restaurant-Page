import Noodles from '../assets/noodles.png';


function displayHome() {

    const content = document.getElementById('content');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');

    const myImg = new Image();
    myImg.src = Noodles;
    myImg.id = "logo";

    contentContainer.appendChild(myImg);

    const restaurantName = document.createElement('h1');
    restaurantName.innerHTML = "Tojo's Noodle Bar";
    restaurantName.id = "restaurantName";
    contentContainer.appendChild(restaurantName);

    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container');
    
    const review = document.createElement('p');
    review.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    review.id = "review";

    const reviewAuthor = document.createElement('p');
    reviewAuthor.innerHTML = "-Toji";
    reviewAuthor.id = "reviewAuthor";
    
    reviewContainer.appendChild(review);
    reviewContainer.appendChild(reviewAuthor);

    contentContainer.appendChild(reviewContainer);
    content.appendChild(contentContainer);
}

export { displayHome }