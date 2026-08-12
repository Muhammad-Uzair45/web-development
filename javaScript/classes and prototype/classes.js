//prototype
/*
const obj1 = {
    name:"shahid",
    age: 21,
    salary (){
        console.log("tax rate is 10%");
    }

}
console.log(obj1);

const obj2 = {
    "account no":21
}
obj2.__proto__ = obj1;
console.log(obj2);           */


// class and constructure
/*
class student {
    constructor(name,age){
        //console.log("student was created");
        this.name = name;
        this.age = age;
    }
    work(){
        console.log("Eigth hours a day");
    }
}
const s1 = new student("Ali",22);
const s2 = new student("Umair",25)
console.log(s1,s2);
s1.work();    */

//inheritance
/*
class animal {
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("sleeping");
    }
}
class dog extends animal {
    bark(){
        console.log("barking");
    }
     
}
const d = new dog();
console.log(d);
d.bark();
d.eat();           */

//supper and Method overriding

class animals{
    constructor(name){
        this.name = name;
    }
    sound () {
        console.log("Animals sounds");
    }
}
class dog extends animals {
    constructor(name){
        super(name);
    }
    sound () {
        console.log("Barking");
    }
}
const d = new dog("Tony");
console.log(d);
d.sound();  // method overriding