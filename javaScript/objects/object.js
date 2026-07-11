  /*
  //creating object
let student={ 
    name: "uzair",
     age: 19,
     city:"lodhran"
    };
console.log(student);
//console.log(student.city);
//for-in  loop
for (let key in student){
    console.log(key,student[key]);
}

//  Add element 
const person={};
person.name="ali";
person.age=20;
console.log(person);

//updete 
student.city="Dunyapur";
console.log(student);

//delete 
delete student.age;
console.log(student);

//function inside the object
const product={
    id:1,
   name:"Mobile",
   description: function(){
    console.log("Good Battery Health");
   }
};
product.description();
console.log(product.name);

//object inside object
const stu={
    name:"Ahmad",
    address:{
    city:"Multan",
    country:"Pakistan"

    }
};
console.log(stu.address.country);
console.log(stu.address["city"]);//In this way we can access the object
//object inside the array
const productItem=[
    {id:1, name:"Mobile", price:29000},
    {id:2, name:"Laptop",price:80000}
]
console.log(productItem[1]);
console.log(productItem[0].price);      
//Array in side the object
const student2={
    name:"Shahid",
    age:"20",
    skills:["HTML","CSS","JAVASCRIPT"]

};
console.log(student2.skills[2]);                  */

//object.keys(),object.values(),object.entries
/*
let student={ 
    name: "uzair",
     age: 19,
     city:"lodhran"
    };
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
// for-of loop using inderect way
for (const num of Object.entries(student)){
    console.log(num);
}

//object.freez()  cannot update/delete/add after the freez object
// Object.freeze(student);
// student.age=23;
// console.log(student);

//object.seal() cannot (delete &  add) only can update
// Object.seal(student);
// student.name="Ali";
// delete student.age
// console.log(student);

//destructuring
const {name,age }=student;
console.log(name);

//this key word   current object refer
const person={
    name:"Adnan",
    age:15,
    greet(){
        console.log(`Asslam-o-Aliakum! ${this.name}`);
    }
};
person.greet();                 */

//spread operater      Shallow Copy
const product={
    id:1,
    name:"Laptop",
    addressShop:{
    country:"Uk"
    }
};
// const copy=  {...product};
// copy.addressShop.country="china";
// console.log(product.addressShop.country);
// Deep copy
const deepcopy=structuredClone(product);
deepcopy.addressShop.country="Pakistn";
console.log(product.addressShop.country)