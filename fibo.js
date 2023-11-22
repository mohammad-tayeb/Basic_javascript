// in fibonacci series we add immidiate previous two values and consider it third value accordingly
// for example >>>>>  fib[n] = fibo[n-1] + fibo[n-2];
// a fibo series = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//must have to take input first two values as input to calculate

let fibo = [0, 1];
for(i = 2; i < 15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);