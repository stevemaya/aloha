const languages = require('./get-aloha.js');

const userLanguage = process.argv[2].toLowerCase();
const language = getAloha(userLanguage);
const result = languages(lang);
console.log(result.farewell); 

/* Class Solution
const language = process.argv[2];
const words = getAloha(language);

if (language === undefined) {
    console.log('Please enter a space and then the name of a language after typing "node main.js");
    console.log(`If that language is in our database, we'll tell you how to say "hello" and "goodbye" in it!)
} else {
    const formattedLang = language [0].toUpperCase() + language.slice(1).toLowerCase();
    console.log('Hello in ' + formattedLang + ' is ' + words.greeting + '.');
    console.log('Goodbye in ' + formattedLang + ' is ' + words.farewell + '.');
}
or,using string interpolation; 
console.log('Hello in ${formattedLang} + ' is ' + words.greeting + '.');
*/