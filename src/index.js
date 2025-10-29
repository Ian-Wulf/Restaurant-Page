import "./styles.css";
import { displayHome } from "./home";   
import { displayMenu } from "./menu";
import { displayAbout } from "./about";

document.addEventListener("DOMContentLoaded", ()=> {
    const homeButton = document.querySelector('.home');
    const menuButton = document.querySelector('.menu');
    const aboutButton = document.querySelector('.about');

    // displayHome(); 
    // displayMenu();
    displayAbout();
    
    homeButton.addEventListener('click', function() {
        const content = document.getElementById('content');
        content.innerHTML = "";
        displayHome();
    });

    menuButton.addEventListener('click', function() {
        const content = document.getElementById('content');
        content.innerHTML = "";
        displayMenu();
    });

    aboutButton.addEventListener('click', function() {
        const content = document.getElementById('content');
        content.innerHTML = "";
        displayAbout();
    }); 
});



