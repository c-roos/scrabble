import { getWords } from './asyncmodule.js';

var englishWords = null;
var contains = [];

function calcWords(presuf, words) {
    t = Date.now();
    console.log(presuf);
    //console.log(words.length);
    words.forEach(function (item) {
        if (item.includes(presuf)) {
            contains.push(item);
        }
    });
    console.log((Date.now() - t) * 1000);
    console.log(contains);
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