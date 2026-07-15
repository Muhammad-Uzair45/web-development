// hoisting with var
/*
console.log(a);
var a =10;   //undefined
var b;
console.log(b);
b =20;    // undefined
var c =25;
console.log(c); //25               */

//hoisting with let & const

 /*
let a =17;
console.log(a);  // 17

//console.log(b)  //reference error
//let b = 23

//console.log(c); // reference error
//const c = 50;
const pi =3.1415;
console.log(pi)   //3.1415

// hoisting with function Declarations

hello();
function hello(){
    console.log("Hello")
}
//hello();   functions are fully hoisted
 
//functions Expresions
//greet();  reference error
const greet = function() {
    console.log("Assalam-o-Alaikum");
}
greet();

//Arrow function

//greeting(); reference error
  const greeting=()=> {
  console.log("Hi");
}
 greeting();         */

 // Scope    => visibility of variable

 // global sope
  let num = 50;
  function show(){
    console.log(num);
  }
  show();
  console.log(num);
  
// Functional Sope
function sayhi(){
    const greet = "Hi"    //var ,let  same sope inside the functions
    console.log(greet);
} 
  sayhi();
 // console.log(greet); // Access only inside the function


// Block scope
   if(true){
    let city = "Lodhran"
    console.log(city);
   }
   //console.log(city); this only show if variable var

//lexical scope
let country = "Pakistan";
function showCountry() {
  console.log(country);
}
showCountry();

// clouser
function outer(){
  let name = "Muzammil";
  function inner(){
    console.log(name)
  }
  return inner;
}
  let fn = outer();
  fn();

  ////
  let a=10;
  function one(){
    let b=20;
    function two(){
      let c=30;
      console.log(a,b,c);
    }
     two();
  }
one();

// conter clouser
function outer(){
  let count=0;
  function inner(){
    count++;
    console.log(count);
  }
  return inner;
}
let counter=outer();
counter();
counter();
counter();
counter();
counter();













