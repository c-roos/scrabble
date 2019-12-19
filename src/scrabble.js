import { getWords, matchWords } from './utils.js';
import { Word, WordContainer } from './components.js';


var englishWords = null;
var r = ReactDOM.render(<WordContainer />, document.getElementById('reactContainer'));


function formHandler(e) {
    const s = document.getElementById('string').value.toLowerCase();
    if (englishWords == null){
        getWords().then(function(txt) {
            englishWords = txt.split('\r\n');
            r.setState({words: matchWords(s, englishWords)});
        });
    }
    else {
        r.setState({words: matchWords(s, englishWords)});
    }
    e.preventDefault();
}


const myForm = document.getElementById('form')
myForm.addEventListener('submit', formHandler);




