// 3 way of creating strings
/*
const str1 = "Uzair";
const str2 = 'learning';
const str3 = `javaScript`;     //modren way
console.log(str1);
console.log(str2);
console.log(str3); 
//console.log(`I'm ${str1}  from Pakistan ${str2} ${str3}`); 
   */ 

//const str = `My name is Uzair`;
//console.log(str.length);
//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
//console.log(str[4]);    
//console.log(str.trim());    // remove starting and ending white spacing
//console.log(str.slice(4,9));
//console.log(str.charAt(3));
//console.log(str.includes("m"));
//console.log(str.indexOf("m"));
//console.log(str.replace("z" , "m"));    // replaceAll replace all select items




// Template litral    use for concate

// const str = `My name is Uzair`;
// const name = "Uzair";
// const age = 19;
// console.log(`My name is ${name} and ${age} years old`);

//console.log(str.concat(age));   

// numbers and Math
let a = 8;
let b = 23.1478;
console.log(a, typeof(a));
console.log(b , typeof(b));
console.log(b.toFixed(2));
console.log(b.toPrecision(5));
console.log(a.toString());
 //math
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.ceil(4.15));
console.log(Math.floor(4.85));
console.log(Math.round(6.59));
console.log(Math.pow(2,3));
console.log(Math.trunc(34.564));
console.log(Math.max(10,15,18,25,12));
console.log(Math.min(6,5,13,10,));
console.log(Math.random()*10+1);

// date
// let today = new Date();
// console.log(today);

// let birthday = new Date("2007,9,20");
// console.log(birthday);
let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getMilliseconds());
console.log(today.getSeconds());