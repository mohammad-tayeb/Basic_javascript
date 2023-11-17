//In this program we have to convert hour to minutes
//we know 1 hour = 60 min
// function hourToMin(hour){
//      let min = hour * 60;
//      return min;
// }
// let input = hourToMin(3);
// console.log(input, 'Min');


//convert the hour to seconds
//In this program we have to convert hour to minutes
//we know 1 hour = 60 min
function hourToMin(hour){
    let min = hour * 60 *60;
    return min;
}
let input = hourToMin(3);
console.log(input, 'Sec');