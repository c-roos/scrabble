async function getWords() {
    const response = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt');
    const myText = await response.text();
    console.log(myText);
}

getWords();