async function getWords() {
    const response = await fetch('/words.txt');
    const myText = await response.text();
    console.log(myText);
}

getWords();