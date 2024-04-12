//Synchronous function ->


// for(let a=0;a<=100;a++){
//     console.log(a);
// }





//asynchronous function -> 


console.log("Hi");

setTimeout(()=>{
    for(let b=0;b<=10;b++){
        console.log(b);
    }
},5000);

console.log("Done printing");


// few way to perform the asynchoronous functions 
// Asynch/await
// callback
// promises



