import homeContent from "./home";
import menuContent from "./menu";
import contactContent from './contact';

let navElements = document.querySelectorAll('.nav_button');
const pageContent = document.querySelector('main');

const changeTab = e => {
  if (!e.target.classList.contains('active')) {
    navElements.forEach(element => element.classList.remove('active'));
    e.target.classList.add('active');
  }
};

navElements.forEach(element => element.addEventListener('click', changeTab));
homeContent();

const navMenu = document.getElementById('menu');
const navHome = document.getElementById('home');
const navContact = document.getElementById('contact');
const menuButton = document.querySelector('.see_menu_button');

const goToMenu = () => {
  pageContent.innerHTML = '';
  pageContent.className = '';
  menuContent();
  navElements.forEach(element => element.classList.remove('active'));
  navMenu.classList.add('active');
};
navMenu.addEventListener('click', goToMenu);
menuButton.addEventListener('click', goToMenu);


const goToHome = () => {
  pageContent.innerHTML = '';
  homeContent();
  navElements.forEach(element => element.classList.remove('active'));
  navHome.classList.add('active');
};
navHome.addEventListener('click', goToHome);


const goToContact = () => {
  pageContent.innerHTML = '';
  contactContent();
  navElements.forEach(element => element.classList.remove('active'));
  navContact.classList.add('active');
};
navContact.addEventListener('click', goToContact);