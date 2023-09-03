import './main.css';
import { mainTitle, subtitle, standardText, container, col12, span, pageContent, div, button, resetVars } from './global_vars';

const homeContent = () => {

    resetVars()

    pageContent.classList.add('home');
    container.classList.add('container');
    col12.classList.add('col-12');
    mainTitle.classList.add('title');
    subtitle.classList.add('subtitle');
    div.classList.add('texts');
    button.classList.add('see_menu_button');
    //* Add CSS Classes


    subtitle.innerHTML = 'Bar&Grill';
    mainTitle.innerHTML = `Interbelic`;
    standardText.innerHTML = "Welcome to the best <span>BBQ</span> cuisine!";
    button.innerHTML = "See menu";
    //* Change elements values


    pageContent.appendChild(container);
    container.appendChild(col12);
    col12.appendChild(div);
    div.appendChild(mainTitle);
    div.appendChild(subtitle);
    col12.appendChild(standardText);
    col12.appendChild(button);
    //* Appends to parents for rendering

    
    return pageContent
};

export default homeContent;