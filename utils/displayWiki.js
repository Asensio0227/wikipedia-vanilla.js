import get from './getElement.js';

const articles = get('.results'); 

const displayWiki = (list) => {
  const card = list.map((items) => {
    const { title, snippet, pageid } = items;
    
    return `
    <a href="http://en.wikipedia.org/?curid=${pageid}" target="_blank">
    <h1 class="title">${title}</h1>
    <p class="desc">
    ${snippet}
    </p>
    </a>
    `
  }).join('')
  articles.innerHTML = `<div class="articles">${card}</div>`
};

export default displayWiki;