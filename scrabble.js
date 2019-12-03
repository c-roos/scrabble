import { getWords } from './asyncmodule.js';

var englishWords = null;

function calcWords(presuf, words) {
    console.log(presuf);
    console.log(words);
}

function formHandler() {
    s = document.getElementById('string').value;
    if (words == null) {
        getWords().then(function (txt) {
            words = txt.split('\n');
            calcWords(s, englishWords);
        });
    } else {
        calcWords(s, englishWords);
    }

    return false;
}