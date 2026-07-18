// Arrays   consists same data type or different data type
/*
let arr = [90,75,80,70,68];
console.log(arr);
const stuName = ["Uzair", "Ali", "Zubair","Ahmad"];
console.log(stuName);
let arr2 = ["Shahid","Umar",89,true];
console.log(arr2); */
 
 /*     // print array values 
let marks = [89,75,91,84,60,74,86];

//using for loop

// for (i = 0; i<marks.length; i++) {
//     console.log(marks[i]);
// }

//using for-in loop (best and modern way)

// for (let mark of marks) {
//     console.log(mark);
// }
//prints value by index
//   console.log(marks[0]);
//   console.log(marks[1]);
//   console.log(marks[3]);
//   console.log(marks[5]);

// change value by index
// marks[3]=88;
// console.log(marks);              */

let furits = ["mango","orange","banana","watermellon"];
// push() insert element in the last
// furits.push("apple");
//console.log(furits);
//unshift()  add element in the starting
// furits.unshift("litchi",8,);
// console.log(furits);
 // pop() delement from the end  shift() delete from starting
//  furits.pop();
//  furits.shift();
//  console.log(furits);
// slice  return a new array no change in orignal
// a=furits.slice(1,3);
// console.log(a)
//splice modify a oraginals arrays
//  furits.splice(1,2,"apple");
// console.log(furits);

//sort

furits.sort();
console.log(furits);

let score = [78,101,2000,93,86,35,];  //this is sorting as a strings only sort first number comparing
/*
num.sort();
console.log(num);
num.sort((a,b) => a-b) // ascending sort
console.log(score); */

// toString
// a=score.toString();
// console.log(a);

//console.log(score.indexOf(86));
//console.log(furits.concat(score));
// console.log(score.join("-"));

/*
//forEach loop
let nums = [45,89,67,74,24];
nums.forEach((num,i,ar)=>{
    console.log(num,i,ar);
});
        */
//fillter   return new array
/*
const ages = [14,45,78,5,23,16,41]
let newArrary=ages.filter(adults=>adults>18);
console.log(newArrary);
console.log(ages);

let users =[
    {name:"uzair", active:true},
    {name:"Mamoon", active:false},
    {name:"Hamid", active:true}
];
let activeUser=users.filter(user=>user.active);
console.log(activeUser);        */

//map  return new array
/*
let number=[2,4,8,90,87,94];
//let sqr=number.map(n=>n**2);
//console.log(sqr);
//console.log(number);

//reduce

let n=number.reduce((accum,current)=>{
      return accum+current;
},0);
console.log(n);
console.log(number); // not orignal change return single value
  */
 //set
 
 let value=[2,4,5,5,3,3,2,];
let unique= [...new Set(value)] ;
console.log(unique);


   let sets=new Set();

  sets.add(20);
  sets.add(34);
  sets.add(20);
  sets.add(8);
  sets.add(20);
  //sets.clear();
 // sets.delete(20);

  //console.log(sets.has(20)); 
 console.log(sets);
 for (let set of sets){
    console.log(set);
 }

