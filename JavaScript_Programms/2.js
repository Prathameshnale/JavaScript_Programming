


//Reference type  -> object,Arrays,Functions

//null is primitive type of data but if we print typeof(null) it will print object.

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








