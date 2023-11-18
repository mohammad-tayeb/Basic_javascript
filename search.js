// includes find a string weather it exists in a line. If exists then it will return true else return false
let lyrics = 'a quick brown fox jump over the tall tree';
let searchItem = 'Quick';
// if both the string in the lower case already
let find1 = lyrics.includes(searchItem);
// if both the strings are not in the same case
let find = lyrics.toLowerCase().includes(searchItem.toLowerCase());
console.log(find1);
console.log(find);

// using indexof
// indexof is same almost as includes if the searched data is not found then it will return -1 instead of false

console.log(lyrics.indexOf('fox'));
// kalapakhi does not exist in the lyrics so it will return -1
console.log(lyrics.indexOf('kalapakhi'));
//using startsWith and endsWith
console.log(lyrics.startsWith('a'));