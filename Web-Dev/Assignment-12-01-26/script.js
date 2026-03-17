// Ouestion - 1

let x = 10; // Declared a variable named as x

function outer(){   // Declared a function named as outer 
    let x = 20      // Declared another variable named as x
    function inner(){  // declared another function inside the outer function
        console.log("The Value of \"x\" inside function is: ",x);  // printing the value of x=20
    }
    inner();  // calling the function named as inner inside the outer function 
}
outer();  // calling the function named as outer 

console.log("The Value of \"x\" outside function is: ",x)  // value of x = 10


    // The value of x is different outside and inside the function because the x outside the function is a part of "Global Code" and the x inside the function is a part of "Inner Code".
    // That's why it's possible to have 2 Variables with the same name but with different values inside and outside a fucntion.



// Question - 2

function multiply(a,b){  // Defining a function named as "multiply" and recieving two values 'a' and 'b'
    return a*b;          // returning the multiplicated value of a and b {(a*b)}
}
let a = 3;               // defining a and giving a value to it
let b = 4;               // defining b and giving a vallue to it
let answer = multiply(a,b);  // defining yet another variable named as "answer" giving it the value returned by the function "multiply"
console.log(`Multiplication of a=${a} and b=${b} is: `,answer); // printing the value of answer = a*b
