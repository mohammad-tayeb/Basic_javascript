function isEven(number){
    mod = number%2;
     if(mod===0)
      return 'Even'
     else
      return 'Odd'
}
let whatThetype = isEven(6);
console.log(whatThetype);
isEven(11);