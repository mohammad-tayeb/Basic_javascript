// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
// help Harry calculate how much money the shopkeeper will return.
var givenMoney = 1000;
var orangePrice = 400;
var mangoPrice = 300;
var returnMoney = givenMoney - orangePrice - mangoPrice;
console.log(returnMoney);

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
var math = 75.25;
var bio = 65;
var che = 80;
var phy = 35.45;
var ban = 99.50;
var sum = math + bio + che + phy + ban;
var avg = sum / 5;
avg = avg.toFixed(2);
console.log(avg);


// John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
// combine these two strings and print them in one line. Help John write the program.
var input1 = "I am going to be";
var input2 = "an awesome web developer"
var con = input1 + " " + input2;
console.log(con);


//Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
// remainder would be if she divided the number by 5. Help Sarah write the program.
var sampleNumber = 119;
var divider = 5;
var remainder = sampleNumber % divider;
console.log(remainder);

