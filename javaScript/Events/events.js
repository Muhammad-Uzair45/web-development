/*
const heading = document.querySelector("h2");
heading.onclick =  ()=>{
    console.log("WellCome to Shop");
};
heading.onclick =  ()=>{
    console.log("Hy!");
};                  */

// standard Way
 /*
const heading = document.querySelector("h2");
heading.addEventListener("click",()=>{
     console.log();
     console.log("WellCome to Shop")
});
heading.addEventListener("click",()=>{
     console.log("Select your favourite item")
});    */

//  keyboard Events 
/*
document.addEventListener("keydown", (e)=>{
     console.log(e.key);
});
       */

//objects Events
/*
const heading = document.querySelector("h2");

heading.addEventListener("mouseover", (e)=>{
    console.log(e);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.timeStamp);
    console.log(e.type);
    console.log(e.key);
});               */

//Bubling and capturing
const grandP = document.querySelector("#grand-parent");
grandP.addEventListener("click", (e)=>{
    //console.log(e.target);
    console.log("grand parent clicked");

} ,true );

const parent = document.querySelector("#parent");
parent.addEventListener("click", (e)=>{
    //console.log(e.target);
    console.log(" parent clicked");

}, false);


const child = document.querySelector("#child");
child.addEventListener("click", (e)=>{
    //console.log(e.target);
    console.log("child clicked");
    //e.stopPropagation();

}, true);    
//Delegation
const list = document.querySelector("#list");
list.addEventListener("click",(e)=>{
console.log(e.target.textContent);
});

// remove event listener
const btn = document.querySelector("#playBtn");
const greet = ()=>{
    console.log("WellCome");
}
btn.addEventListener("click", greet);
btn.removeEventListener("click",greet)


