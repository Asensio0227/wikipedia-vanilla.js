import get from './getElement.js';

const results = get('.results');

const fetchWiki = async (url) => {
  results.innerHTML=`<div class="lds-facebook"></div>`
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    const setupUI = data.query.search;
    if (setupUI.length < 1) {
      results.innerHTML = `<p class="error">No match to your search criteria</p>`
      return;
    }
    return setupUI;
  } catch (error) {
    results.innerHTML = '<div class="error"> there was an error...</div>';
  }
}

export default fetchWiki;