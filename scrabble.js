import { getWords, calcScore, matchWords } from './utils.js';
import { Word, WordContainer } from './components.js';

var englishWords = null;
var r = ReactDOM.render(React.createElement(WordContainer, null), document.getElementById('container'));

function formHandler(e) {
    var s = document.getElementById('string').value;
    if (englishWords == null) {
        getWords().then(function (txt) {
            console.log(calcScore('ab'));
            englishWords = txt.split('\r\n');
            r.setState({ words: matchWords(s, englishWords) });
        });
    } else {
        console.log(calcScore('ab'));
        r.setState({ words: matchWords(s, englishWords) });
    }
    e.preventDefault();
}

var myForm = document.getElementById('form');
myForm.addEventListener('submit', formHandler);