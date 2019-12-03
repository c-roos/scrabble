import { getWords } from './asyncmodule.js';

var englishWords = null;

function calcWords(presuf, words) {
    console.log(presuf);
    console.log(words.length);
}

function formHandler(e) {
    var s = document.getElementById('string').value;
    if (englishWords == null) {
        getWords().then(function (txt) {
            englishWords = txt.split('\n');
            calcWords(s, englishWords);
        });
    } else {
        calcWords(s, englishWords);
    }
    e.preventDefault();
}

var myForm = document.getElementById('form');
myForm.addEventListener('submit', formHandler);