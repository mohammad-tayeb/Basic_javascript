// to convert all letters to uppercase or lowercase
let myName = 'Tayeb';
let myName2 = 'tayeb';
console.log(myName.toLowerCase());
console.log(myName2.toLowerCase());
// comparing without converting to toLowerCase
if(myName === myName2){
    console.log('valid');
}
else{
    console.log('not valid');
}
// converting to lowercase and compare
if(myName.toLowerCase() === myName2.toLowerCase()){
    console.log('valid');
}
else{
    console.log('not valid');
}