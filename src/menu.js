import './main.css';
import { mainTitle, subtitle, standardText, container, col12, span, pageContent, div, button, resetVars } from './global_vars';

let menu = [
    {
        title: '3 <span>BBQ</span> Sticks',
        details: 'Three awesomenly grilled BBQ sticks, each one with a different type of meat: chicken, beef and pork.',
        image: '3_bbq_sticks.png',
    },
    {
        title: 'King <span>Bacon</span> Burger',
        details: 'Once, it used to be just an ordinary burger, but managed to acquire the power of bacon and became KING BACON!',
        image: 'bacon_beacon.png',
    },
    {
        title: 'Fries with 2 <span>sauces</span>',
        details: 'A simpel yet delicate side of fries with two sauces included: ketchup and mayo.',
        image: 'basic_fries.png',
    },
    {
        title: '<span>BBQ</span> Sticks menu',
        details: 'For the grill lovers, a menu with two beef BBQ sticks seasoned with peppers, a fresh salad, hot sauce and a generous side of fries.',
        image: 'bbq_sticks_menu.png',
    },
    {
        title: 'One of the <span>Classics</span>',
        details: "It is the very burger that you see being eaten by police detectives in like every movie, so yeah, it's a classic.",
        image: 'classic_burger.png',
    },
    {
        title: 'The <span>Burrito</span>',
        details: 'As every burrito should be, perfectly balanced between flavored and spicy.',
        image: 'classic_burrito.png',
    },
    

    {
        title: 'Crispy Chicken <span>Cheese</span> Burger',
        details: "When grilled beef won't cut it and you want some nice crispy chicken but as a burger, this is the perfect choice.",
        image: 'crispy_cheese.png',
    },
    {
        title: "King's <span>Crispy</span> Menu",
        details: "When you're hungry for something hot and crispy but also want to it like a king.",
        image: 'crispy_wings.png',
    },
    {
        title: 'Double the <span>Cheese</span> Menu',
        details: 'A menu for the hungry with a big, juicy Double Cheese Burger, fries and ice-cold drink.',
        image: 'double_cheese_menu.png',
    },
    {
        title: 'The Grilled <span>Pollo</span> Burrito',
        details: "For when you're hungry for some mexican cuisine but you don't want beef.",
        image: 'grill_chicken_burrito.png',
    },
    {
        title: "King's <span>BBQ Sticks</span> Platter",
        details: "For true kings only, a platter with as many BBQ sticks as you can eat.",
        image: 'kingdon_on_sticks.png',
    },
    {
        title: 'The <span>Tower</span>',
        details: 'Only for the bravest of the brave, this burger will give you a challenge!',
        image: 'the_tower_burger.png',
    },
    {
        title: 'The <span>Steak</span> Classy',
        details: 'A classy yet juicy and tender steak, only for the artistocrats among us.',
        image: 'steak_menu.png',
    },
    {
        title: "King's <span>Steak</span> Plateau",
        details: 'A plateau seasoned with the finest Wagyu steak that will blow away even the most picky eaters.',
        image: 'the_goat_steak.png',
    },
    {
        title: "King's <span>Generosity</span>",
        details: "A package as generous as it can get. King's generosity contains: BBQ sticks, Wagyu stakes, Black Angus sausages and patties, but also grilled vegetables.",
        image: 'the_whole_package.png',
    },
]

const menuContent = () => {

    resetVars();
    
    let cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards_container')
    
    pageContent.classList.add('menu');
    container.classList.add('container');
    col12.classList.add('col-12');
    mainTitle.classList.add('title');
    subtitle.classList.add('subtitle');

    subtitle.innerHTML = 'Bar&Grill';
    mainTitle.innerHTML = `Interbelic`;

    pageContent.appendChild(container);
    container.appendChild(col12);
    col12.appendChild(div);
    div.appendChild(mainTitle);
    div.appendChild(subtitle);

    
    menu.forEach(dish => {
        let dishCard = document.createElement('div');
        let dishTitle = document.createElement('h3');
        let dishDetails = document.createElement('p');
        let dishImg = document.createElement('img');

        dishTitle.innerHTML = dish.title;
        dishDetails.innerHTML = dish.details;
        dishImg.src = `./imgs/${dish.image}`;
        

        dishCard.classList.add('col-md-4');
        container.appendChild(cardsContainer);
        cardsContainer.appendChild(dishCard);
        dishCard.appendChild(dishTitle);
        dishCard.appendChild(dishDetails);
        dishCard.appendChild(dishImg);
    })

    return pageContent 
};

export default menuContent;