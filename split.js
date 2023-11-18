let lyrics = 'a quick brown fox. jump over the tall tree.';
let lyrics1 = '   a quick brown fox. jump over the tall tree     ';
//split word by word
let part = lyrics.split(''); 
//split sentence by sentence
let part1 = lyrics.split(' ');
//split according to "."
let part2 = lyrics.split('.');
//using slice/substring
let part3 = lyrics.slice(3,6);
let part4 = lyrics.substring(3,6);
//using trim removes the white space from a sentence(from start and end)
console.log(part);
console.log(part1);
console.log(part2);
console.log(part3);
//using trim removes the white space from a sentence(from start and end)
console.log(lyrics1 );
console.log(lyrics1.trim());
