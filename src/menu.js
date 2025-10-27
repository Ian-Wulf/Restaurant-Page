
function displayMenu() {
    const content = document.getElementById('content');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');

    
    content.appendChild(contentContainer);   

}

export { displayMenu }