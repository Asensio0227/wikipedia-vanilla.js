import fetchWiki from './fetchWiki.js';
import display from './displayWiki.js'

const presentWiki = async (url) => {
  const wiki = await fetchWiki(url);
   display(wiki);
}

export default presentWiki;