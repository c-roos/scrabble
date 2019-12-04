import { getWords } from './asyncmodule.js';

var scoreMap = {
    'a': 1,
    'b': 3,
    'c': 3,
    'd': 2,
    'e': 1,
    'f': 4,
    'g': 2,
    'h': 4,
    'i': 1,
    'j': 8,
    'k': 5,
    'l': 1,
    'm': 3,
    'n': 1,
    'o': 1,
    'p': 3,
    'q': 10,
    'r': 1,
    's': 1,
    't': 1,
    'u': 1,
    'v': 4,
    'w': 4,
    'x': 8,
    'y': 4,
    'z': 10
};

var englishWords = null;

function calcScore(word) {
    var score = 0;
    for (var i = 0; i < word.length; i++) {
        score += scoreMap[word.charAt(i)];
    }
    return score;
}

function calcWords(presuf, words) {
    var t = Date.now();
    var contains = [];
    words.forEach(function (item) {
        if (item.startsWith(presuf) || item.endsWith(presuf)) {
            contains.push(item);
        }
    });
    console.log((Date.now() - t) / 1000);
    contains.forEach(function (word) {
        return console.log(word + ': ' + calcScore(word));
    });
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