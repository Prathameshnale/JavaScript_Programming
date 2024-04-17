/*

Functions - Functions in js are used to organize the code in particular manner. and also used to avoid
            writing a code repeatedly.

*/

//functions 

//defination of funtion
function greet(){        //function is keyword  and greet is a name of the function.
    console.log("learning functions in javascript...");
}

greet();  //calling function 

function test(name)  
{
    console.log("Hello "+name);
    console.log(typeof(name));   //string ,scop of name inside functin only
}

test("prathamesh");


function test1(firstName,lastName){
    console.log(firstName+" "+lastName);  //prathamesh undefined  //bydefault data type if undefined
}
test1("prathamesh");


function test2(firstName,lastName){
    console.log(firstName+" "+lastName);   // prathamesh nale
}
test2("prathamesh","nale");



function square(num)
{
    return num * num;
}

console.log(square(5));




//1st way to make functions

function findFactorial(num){
    let fact=1;
    for(let i=num;i>=1;i--){
        fact*=i;
    }

    return fact;
}

console.log(findFactorial(5));  //calling the functions


//2nd way to make functions (arrow functions)

const findPrime = (num)=>{
    let status =false;
    let count=0;
    for(let i=1;i<num;i++){
        if(num%i==0){
            count++;
        }
    }

    if(count==1){
        return true;
    }else{
        return false;
    }
}


if(findPrime(10)){
    console.log("Number is prime");
}else{
    console.log("Number is not prime");
}
