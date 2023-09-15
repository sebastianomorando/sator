const words = require('./words.json');

/*
    NAIVE/BRUTE FORCE APPROACH
    1. prendi la prima parola 
    2. trova tutte le parole che iniziato con la seconda lettera della prima parola
    se questa condizione non è soddisfatta non esiste un quadrato magico
    3. la seconda lettera della terza parola deve essere uguale alla terza lettera della seconda parola
*/

const findAllWordsThatStartWith = (letter, words) => {
    return words.filter(word => word[0] === letter);
}

console.log(words[0]);
console.log(findAllWordsThatStartWith(words[0][1], words)[0]);
console.log(findAllWordsThatStartWith(words[0][2], words)[0]);
console.log(findAllWordsThatStartWith(words[0][3], words)[0]);
console.log(findAllWordsThatStartWith(words[0][4], words)[0]);