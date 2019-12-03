import { getWords } from './asyncmodule.js';

var words;

getWords().then(function (value) {
    console.log(value);
    words = value;
});

console.log(words);