// to check an array
let demoArray = [1, 2, 3, 4, 5, 6, 7]
console.log(typeof demoArray);
// if we console log an array with type of it show return object. but demoArray is not an array
// so to check it we can write
 console.log(Array.isArray(demoArray));
// so the ans is true it is an array


//concating two array
let demoArray1 = [1,2,3,4,5,6,7,8,9];
let demoArray2 = [1,2,3,4,5,6,7,8,8];
let newArray = demoArray1.concat(demoArray2,demoArray);
console.log(newArray);

