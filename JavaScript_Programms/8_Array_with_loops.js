//1. for Loop ->

let arr = [1,2,3,4,5,6,7,8,9];

console.log("for Loop");
for(let a=0;a<arr.length;a++){
    console.log(arr[a]);
}





//2. forEach loop       //for use of forEach loop we need to write arrow function inside forEach() 
console.log();
console.log("arr.forEach");

arr.forEach((a)=>{
    console.log(a);
})





//3. Array.from()       //it is used to convert any other object into array
console.log();
console.log("arr.forEach");

let name1 = "prathamesh";    //this is string type

// name1.forEach((a)=>{       // so name1 is a string since we cannot use here forEach loop so here
//     console.log(a);        // we need to convert String into array first ,then we can use forEach loop
// })                         // and for conversion into array we need to Array.from() function.


name1 =Array.from(name1);    //this will convert string to array and now we can use forEach loop.

name1.forEach((a)=>{
    console.log(a);
})






//4. for of loop    //it will print array elements one by one 
console.log();
console.log("for of loop");

arr = [11,22,33,44,55,66,77];

for(let i of arr){
    console.log(i);
}





//5. for in loop      //it will print key's of array (i.e index) by using that we can print element also.
console.log();
console.log("for in loop");


for(let i in arr){
    console.log(i);    //it will print the key i.e index
}

console.log();

for(let i in arr){
    console.log(arr[i]);    //it will print elements in array with the help of key i.e index.
}