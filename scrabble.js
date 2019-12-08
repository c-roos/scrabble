import { getWords, matchWords } from './utils.js';
import { Word } from './components.js';

var englishWords = null;
var r = ReactDOM.render(React.createElement(Word, null), document.getElementById('container'));

function formHandler(e) {
    var s = document.getElementById('string').value;
    if (englishWords == null) {
        getWords().then(function (txt) {
            englishWords = txt.split('\r\n');
            r.setState({ words: matchWords(s, englishWords) });
        });
    } else {
        r.setState({ words: matchWords(s, englishWords) });
    }
    e.preventDefault();
}

var myForm = document.getElementById('form');
myForm.addEventListener('submit', formHandler);