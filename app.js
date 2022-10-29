import present from './utils/presentWiki.js';
import './utils/formWiki.js'

const url ='https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=apple';


window.addEventListener('DOMContentLoaded',function(){
  present(url);
})


