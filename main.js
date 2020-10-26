const languages = require('./get-aloha.js');

const userLanguage = process.argv[2].toLowerCase();
const lang = userLanguage;
const result = languages(lang);
console.log(result.farewell); 