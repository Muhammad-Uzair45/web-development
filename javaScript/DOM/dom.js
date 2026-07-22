console.log(window);
console.log(document.body);
//DOM  selection methods

const h = document.getElementById("firstHeading");
console.log(h);
const listHeading = document.getElementsByClassName("listHeading");
console.log(listHeading);

const tagName = document.getElementsByTagName("h3");
console.log(tagName);

const querySelecterMethod = document.querySelector(".listHeading");   
console.log(querySelecterMethod);    // select element by id ,class ,tag)=> gives first matching element

const querySelecterAllMethod = document.querySelectorAll(".listHeading");
console.log(querySelecterAllMethod);  //select element by id ,class ,tag)=> gives all matching element 

//text Access

const h1 = document.getElementById("firstHeading");
console.log(h1.innerHTML);

console.log(h1.innerText);
console.log(h1.textContent);  //display hidden text
// change text
//h1.innerText="Happy";
//h1.innerHTML="<h1><i>Good Day</i></h1>"
//h1.textContent="hi!"

//Attributes
const attributeAccess=h1.getAttribute("id");
console.log(attributeAccess);

h1.setAttribute("class","heading");

//sytle
const h3 = document.querySelector(".listHeading");
h3.style.color = "green";
h3.style.fontSize = "40px";