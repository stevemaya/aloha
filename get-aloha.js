// Your code here.
const languages = require('./db.js');
const lowercaseKeys = require('lowercase-keys');

const getAloha = function(language){
    switch(language) { 
        case 'english':
            return languages.english.greeting;

        case 'spanish':
            return languages.spanish.greeting;

        case 'japanese':
            return languages.japanese.greeting;

        case 'russian':
            return languages.russian.greeting;

        case 'zulu':
            return languages.zulu.greeting;

        default:
            return null;
    }
}


// Our code here.
if (typeof getAloha === 'undefined') {
    getAloha = undefined;
}


module.exports = getAloha;
