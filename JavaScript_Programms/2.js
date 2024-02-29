//java script is a dynamic typed language
//it means if assigned string type of value to the variable let say name="prathamesh";
//typeof name is string and later on if we assign the number of the name, i.e name=8876 
//now the typeof name is becomes the number and this allowed in java script so it is called as dynamic typed
//language. it is not allowed in c,c++,java.





//Reference type  -> object,Arrays,Functions

//object -> 

let person = {   //here person is a object and name, age are the properties of the object
    "name":"prathamesh",
    "age":"24"
}
console.log(person);


let employee = {
    empName:"Raj",
    empId:"8876"
}
console.log(employee);

//we can access the properties of object in two ways 1.using . operator and using [] operator
employee.empName="abc";
employee["empId"]=1000;

console.log(employee);

console.log(typeof(person));



//Arrays 

//Arrays in javascript are dynamic means the size can be change and type can ba change or mix

let array = [];   // empty array
console.log(array);   
console.log(typeof(array));  //typeof(array) = object 

array[0]="prathamesh";  //size is changed dynamically
console.log(array);

array = [10,20];
console.log(array);

array=[8876,"prathamesh",null,undefined,true];   //array can have different number of data type values
console.log(array);

console.log(array.length); //dispaly length of array




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


