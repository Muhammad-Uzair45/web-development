// Functions 
//basic syntan 
  /*
function functionName(params) {
    // code
}   */
// Declarations

function add(num1,num2){
    console.log(num1+num2);
}
add(3,5);
//  add(3,2);     we can call function many time they gives result
// add(63,47);


//return

// console.log(multiple(3,5))   this is valid before initialization

function multiple(a,b){
    return a*b;
}
const mulResult = multiple(3,4);
 console.log(mulResult);
//  const mulR = multiple(3,13);   // 39 output
//  console.log(mulR);

// function Expression
//greeting();  // cannot access before initialization

const greeting = function (){
    console.log("Assalom -o-Alaikum!");
}
 greeting();

//Arrow function:   (Modern Way)
//syntax:    ()=>{}
const square = (num)=>{
    return num**2;  //num*num
}
console.log(square(9));

// short way
const sqr = num=>num*num;
console.log(sqr(7));

// Default Parameters
function myName(name="Guest"){
    console.log(name);
}
myName();

//Rest parameters     unlimited arguments
function total(...numbers){
    let sum = 0;
    for (const num of numbers) {
       sum+=num; 
    }
     console.log(sum);
}
total(2,4,6,789,2653);

// IIFE:   khud run ho jata hy
(function () {
    console.log("I am Uzair");
})();
 
