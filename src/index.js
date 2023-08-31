
let navElements = document.querySelectorAll('.nav_button');

const changeTab = e => {
    if(!e.target.classList.contains('active')) {
        navElements.forEach(element => element.classList.remove('active'));
        e.target.classList.add('active');
    }
};

navElements.forEach(element => element.addEventListener('click', changeTab));