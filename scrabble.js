import { test, getWords, matchWords } from './utils.js';
import { Word, WordContainer } from './components.js';

test();
var englishWords = null;
var r = ReactDOM.render(React.createElement(WordContainer, null), document.getElementById('reactContainer'));

function formHandler(e) {
    var s = document.getElementById('string').value;
    alert(s);
    if (englishWords == null) {
        getWords().then(function (txt) {
            englishWords = txt.split('\r\n');
            r.setState({ words: matchWords(s, englishWords) });
        });
    } else {
        r.setState({ words: matchWords(s, englishWords) });
    }
    alert(s);
    e.preventDefault();
}

var myForm = document.getElementById('form');
myForm.addEventListener('submit', formHandler);