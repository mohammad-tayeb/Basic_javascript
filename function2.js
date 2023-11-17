//*receiving parameter value from
function sum(a,b,c,d,e){   //declaring a function named sum 
    console.log(a,b,c,d,e);    // to see the values 
    var sum = a + b + c + d + e;
    console.log(sum);
}

sum(1,2,3,4,5); //calling the function

function cal(number1,number2){
    add = number1 + number2; //adding number1 & number2
    return add;  //returing the value of add in the function call
}

 //calling the function and assigning the returning value of the fun. in the total var
total = cal(80,10);
console.log(total);