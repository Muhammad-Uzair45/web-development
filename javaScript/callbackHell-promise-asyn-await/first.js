// console.log("one");
// console.log("two");
// console.log("three");

/*
//          callback fn
function greet(name){
    console.log(`WellCome ${name}`);
}
function process(callback){
    // console.log("Start");
    callback("Uzair");
    // console.log("End");
}
process(greet);   */
  /*
function calculate(a,b,callbackfn){
    // console.log("start");
    callbackfn(a,b);
    // console.log("end");

}
calculate( 2,4,(c,d)=>{
    let result = c + d;
console.log(result);
});           */


// callback Hell
/*
function getdata(dataId,nextdata){
    setTimeout( ()=>{
        console.log("data  =" ,dataId);
        if (nextdata){
            nextdata();
        }

    },2000);
}
 getdata(2, ()=>{
    console.log("getting data3...")
    getdata(3,  ()=>{
            console.log("getting data4...")

      getdata(4, ()=>{
            console.log("getting data5...")

        getdata(5);
      });  
    });
 });
         */
//promise  
   /*
const p1 = new Promise((resolve, reject) => {
    console.log("hello");
    resolve("success");

});
//console.log(p1)
p1.then( (data)=> {
    console.log(data);
});            */

/*
const promise = new Promise((resolve, reject) => {

    resolve("Success");
});
promise.then((result) => {
        console.log(result);
    })
       .catch((error) => {
        console.log(error);
    })
      .finally(() => {
        console.log("Operation finished");
    });
   // console.log(promise);    */

   const p2 = new Promise( (resolve,reject) => {
   // console.log("1st");
   
    setTimeout( () => {
        resolve("Data received");
    }, 3000);

   });
   
   //console.log("2nd");

   p2.then( (res) => {
    console.log(res);
   });
    //console.log("3rd");





