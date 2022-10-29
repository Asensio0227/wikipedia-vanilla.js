import get from './getElement.js'
import presentWiki from './presentWiki.js';

const baseUrl ='https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const form = get('.form');
const searchValue = get('.search');
const results = get('.results');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const value = searchValue.value;
  if (!value) {
   results.innerHTML =
      '<div class="error"> please enter valid search term</div>';
    return;
  }
  presentWiki(`${baseUrl}${value}`)
})
