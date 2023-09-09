
const mainTitle = document.createElement('h1');
const subtitle = document.createElement('h2');
const standardText = document.createElement('p');
const container = document.createElement('div');
const col12 = document.createElement('div');
const span = document.createElement('span');
const pageContent = document.querySelector('main');
const div = document.createElement('div');
const button = document.createElement('a');

const resetVars = () => {
  mainTitle.innerHTML = '';
  subtitle.innerHTML = '';
  standardText.innerHTML = '';
  container.innerHTML = '';
  col12.innerHTML = '';
  span.innerHTML = '';
  pageContent.innerHTML = '';
  div.innerHTML = '';
  button.innerHTML = '';
}

export { mainTitle, subtitle, standardText, container, col12, span, pageContent, div, button, resetVars };