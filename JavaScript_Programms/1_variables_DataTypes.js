console.log("Welcome to my world...");

let name;
console.log("name = "+name);  //by default data type is undefined

name="prathamesh";  //we can use "" or '' to assign the string 
console.log("name = "+name);

name='nale';        //we can use "" or '' to assign the string
console.log("name = "+name);

//Variables - Variables are nothing but the container which is used to store the values of different types
          
//Rules of variable name -
//1. It should not be reserved key word
//2. It should be meaningfull as well as in camelCase
//3. It is case-sensetive
//4. variable should not containt any special character except _ and $
//5. No space is allowed between any charachter of variable name.
//6. Variable name should not start with the digit.




/*
 what is static typed and what is dynamic typed language?

 -> We can change the data type of variable at the run time then such language is called as dynamic
    typed language. 
    e.g JavaScript is a dynamic typed language.

    We cannot change the data type of variable once it is declared then such language is called as
    static typed language.
    e.g C,C++,Java,etc.

*/

let firstname="abc";
console.log(firstname);

//types of varibles in js
//1. var -> not recommanded because it is global scope so it can be modified from anywhere.
            // (it was used before ES6 or ES2015)
            //ES6 stands for ECMA Script 6 (6 is 6th a version) 
            //var can be re-declared within it's scope.
            //if not initialized at the time of declaration then it is bydefault undefined data type
//2. let -> blocked scope (recommanded).
            //let cannot be re-declared.
            //if not initialized at the time of declaration then it is bydefault undefied data type.
//3. const -> Scope is througout the programm
            // it cannot be re-declared once declared and cannot be modified once initialized.




//constant variable

//const num; //error, it is mandatory to initialize at the time of declaration

const num1=5;
//num1=7;       //it will give error we cannot modify the constant variable

console.log(num1);







/*
Data types in JS
Two types ->
    1. Primitive/value type
        (There are 7 Primitive data types in JS (ss bb u nn just to remember all data types))
        number       e.g let a=5;
        null         e.g let b=null;
        boolean      e.g let c=true;
        BigInt       e.g let d=BigInt('8876');
        undefined    e.g let e=undefined; or let e;
        string       e.g let f="prathamesh";
        Symbol       e.g let g=Symbol("JavaScript course");


        Examples of all primitive types 

        1   let firstName="prathamesh";  //string    typeof(firstName) = string
            console.log(firstName);
            console.log(typeof(firstName));

        2   firstName=8876;  //Number    typeof(firstName) = number
            console.log(firstName);
            console.log(typeof(firstName));

        3   firstName=null;   //null typeof(firstName) = object
                            //null is primitive type of data but if we print typeof(null) it will print object.         
            console.log(firstName);
            console.log(typeof(firstName));

        4   firstName=undefined;  //undefined   typeof(firstName) = undefined
            console.log(firstName);
            console.log(typeof(firstName));

        5   firstName=true;    //Boolean   typeof(firstName) = boolean
            console.log(firstName);
            console.log(typeof(firstName));

        6   firstName=BigInt("8876");    //BigInt   typeof(firstName) = bigint
            console.log("hi"+firstName);
            console.log(typeof(firstName));

        7   firstName=Symbol("hi hello");    //Symbol   typeof(firstName) = symbol
            console.log(firstName);
            console.log(typeof(firstName));





    2. Non-primitive/reference type
        (There are mainly 3 Non primitive data types)
        1. Object (key-value pair)
        2. Array
        3. Fucntions
   
*/






