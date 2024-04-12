//

let promise = new Promise(function(resolve, reject){
    alert("alert from promises");
    resolve("resolved successfully");
    //reject("rejected");
})


console.log(promise);