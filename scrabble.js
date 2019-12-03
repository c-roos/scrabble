import { getWords } from './asyncmodule.js';

var englishWords = null;

function calcWords(presuf, words) {
    var t = Date.now();
    //console.log(words[0].charCodeAt(0));
    //console.log(words[0].charCodeAt(1));
    var contains = [];
    words.forEach(function (item) {
        if (item.startsWith(presuf) || item.endsWith(presuf)) {
            contains.push(item);
        }
        //if (item === presuf) {
        //    contains.push(item);
        //}
    });
    console.log((Date.now() - t) / 1000);
    console.log(contains);
}

function formHandler(e) {
    var s = document.getElementById('string').value;
    if (englishWords == null) {
        getWords().then(function (txt) {
            englishWords = txt.split('\r\n');
            calcWords(s, englishWords);
        });
    } else {
        calcWords(s, englishWords);
    }
    e.preventDefault();
}

var myForm = document.getElementById('form');
myForm.addEventListener('submit', formHandler);