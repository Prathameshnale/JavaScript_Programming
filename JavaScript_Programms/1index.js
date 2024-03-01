console.log("Welcome to my world...");

let name;
console.log("name = "+name);  //by default data type is undefined

name="prathamesh";  //we can use "" or '' to assign the string 
console.log("name = "+name);

name='nale';        //we can use "" or '' to assign the string
console.log("name = "+name);


//Rules of variable name

//1. It should not be reserved key word
//2. It should be meaningfull as well as in camelCase
//3. It is case-sensetive
//4. variable should not containt any special character except _ and not start with digit.

let firstname="abc";
console.log(firstname);



//constant variable

//const num; //error, it is mandatory to initialize at the time of declaration

const num1=5;
//num1=7;       //it will give error we cannot modify the constant variable

console.log(num1);


//two types of data  Primitive/value type and non-primitive/reference type
// primitive ->  string,Number,null,undefined,Boolean

let firstName="prathamesh";  //string    typeof(firstName) = string
console.log(firstName);
console.log(typeof(firstName));
firstName=8876;  //Number    typeof(firstName) = number
console.log(firstName);
console.log(typeof(firstName));
firstName=null;   //null typeof(firstName) = object
console.log(firstName);
console.log(typeof(firstName));
firstName=undefined;  //undefined   typeof(firstName) = undefined
console.log(firstName);
console.log(typeof(firstName));
firstName=true;    //Boolean   typeof(firstName) = boolean
console.log(firstName);
console.log(typeof(firstName));

