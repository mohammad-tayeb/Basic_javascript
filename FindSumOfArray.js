function sumOfArray(numbers){
     sumFinal = 0;
     for(let i=0; i<numbers.length; i++)
     {
        sumInitial = numbers[i];
        sumFinal = sumFinal + sumInitial;
     }
     return sumFinal;
}

numbersArray = [1,2,3,5];
let sum = sumOfArray(numbersArray);
console.log(sum);