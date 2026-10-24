// console.log("start");
// function test(){
//     console.log("Inside function");
// }
// test();
// console.log("end");

if(true)
{
    var a=10; //dangerous in real life projects,accessible outside.
    let b=20; 
    const c=30;
}

console.log(a); //10
console.log(b); //Error
console.log(c); //Error


//q1.1
let a=10;
let a=10;
console.log(a); //error

//q1.2
var a=10;
console.log(a); 
var a=20;
console.log(a); //20

//q2.1
function test()
{
    let x=100;
    console.log(x); //100
}
test();
console.log(x+10); //error

//q2.2
function test()
{
    var x=100;
    console.log(x); //100
}
test();
console.log(x+10); //error

//q3.1
if(true){
    let ss="active";
    console.log(ss); //active
}
console.log(ss); //error

//q3.2
if(true){
    var ss="active";
    console.log(ss);//active
}
 console.log(ss); //active

 //q5.1
let value=10; //global context-global scope
function display()
{
    let value=20; //function display context-block/ functional scope
    console.log(value); //20
}

display();
console.log(value);//10

//q5.2
var valu=10; //gec
function display()
{
    value=20;
    console.log(value);
}
display();
console.log(value);