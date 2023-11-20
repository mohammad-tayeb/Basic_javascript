// // finding the maximum number from an array using for loop
// function maxInArray(numbers){
//      let maxNum = numbers[0];
//      for(let i = 0; i<numbers.length; i++){
//         element = numbers[i];
//         if(element > maxNum){
//             maxNum = element;
//         }
//      }
//      return maxNum;

// }
// let array = [12, 23, 49, 90, 100];
// let number = maxInArray(array);
// console.log(number);

// finding the minimum number from an array using for loop
function maxInArray(numbers){
    let maxNum = numbers[0];
    for(let i = 0; i<numbers.length; i++){
       element = numbers[i];
       if(element < maxNum){
           maxNum = element;
       }
    }
    return maxNum;

}
let array = [12, 23, 49, 90, 100];
let number = maxInArray(array);
console.log(number);