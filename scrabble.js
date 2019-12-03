import { getWords } from './asyncmodule.js';

var words;

getWords().then(function (t) {
  words = t;
});

console.log(words);