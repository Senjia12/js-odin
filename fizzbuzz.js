/*Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.*/

/*pseudocode : 
prompt asking the user number
Take each integer from one to the unput number
for each number check if module 5 et 3 == 0 => fizzbuzz
check modulo 5 == 0 => buzz
check modulo 3 ==0 => fizz
else if neither of these options => print number checked*/

function FizzBuzz() {
    let number = parseInt(prompt("Enter an integer to fizzbuzz up to this number: "));
    if (number < 1){
        console.alert("Only enter an integer value above 0!");
        FizzBuzz();
    }
    for (let i = 1; i <= number; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0){
            console.log("Fizz");
        }
        else if (i % 5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i)
        }
    }
}