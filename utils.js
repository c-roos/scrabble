const scoreMap = {
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


async function getWords() {
    const response = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt');
    return await response.text();
}


function calcScore(word) {
    var score = 0;
    for (let i = 0; i < word.length; i++) {
        score += scoreMap[word.charAt(i)];
    }
    return score;
}


function matchWords(presuf, words) {
    var contains = [];
    words.forEach(function(word) {
        if (word.startsWith(presuf) || word.endsWith(presuf)) {
            contains.push(word);
        }
    });
    return contains;
}

function test() {
    alert('test');
}


export { test, getWords, calcScore, matchWords };