import './main.css';
import { mainTitle, subtitle, standardText, container, col12, span, pageContent, div, button, resetVars } from './global_vars';


const contactContent = () => {

  resetVars();

  let cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards_container');
  let emailText = document.createElement('p');
  let telNumber = document.createElement('p');

  pageContent.classList.add('contact');
  container.classList.add('container');
  col12.classList.add('col-12');
  mainTitle.classList.add('title');
  subtitle.classList.add('subtitle');

  subtitle.innerHTML = 'Bar&Grill';
  mainTitle.innerHTML = `Interbelic`;
  standardText.innerHTML = 'For reservations or any details, you can contact us here:';
  emailText.innerHTML = '<span>contact@interbelic.com</span>';
  telNumber.innerHTML = '<span>+40 21 245 435</span>';

  pageContent.appendChild(container);
  container.appendChild(col12);
  col12.appendChild(div);
  col12.appendChild(cardsContainer);
  cardsContainer.appendChild(standardText);
  cardsContainer.appendChild(emailText);
  cardsContainer.appendChild(telNumber);
  div.appendChild(mainTitle);
  div.appendChild(subtitle);




  return pageContent
};

export default contactContent;