import homeContent from "./home";


let navElements = document.querySelectorAll('.nav_button');

const changeTab = e => {
    if(!e.target.classList.contains('active')) {
        navElements.forEach(element => element.classList.remove('active'));
        e.target.classList.add('active');
    }
};

navElements.forEach(element => element.addEventListener('click', changeTab));
homeContent();

const goToMenu = () => {
    console.log('mere');
};

document.querySelector('.see_menu_button').addEventListener('click', goToMenu);