//premitive type

let a=10;
let b=a;

a=40;

console.log("a = "+a+" and b = "+b); //a = 40 and b = 10  so premitive types are independent from each other

//so in above example values are stored inside variable a and b 
//in premitive values are copied


//reference type or non-premitive type

let x= {value:10};

let y=x;

x.value= 15;


console.log("x = "+x.value+" and y = "+y.value);  //x = 15 and y = 15 so reference type are dependent each other

//so in reference type references are stored in the variable x and y;
//in non premitive/reference references are copied


//another example

let num=10;

function increment(num){   //here value 10 is copied into num from num (values of both num are different)
    num++;
}

increment(num);
console.log("num = "+num);  // num = 10


let number = { value: 15};

function increment1(number){  //here reference are copied from number into number (here value of both reference are same)
    number.value++;
}


increment1(number);
console.log("number = "+number.value); //number = 16









//Objects in javaScript are dynamic  

function user(name,email){
    console.log("hi  welcome");
    this.name=name,
    this.email=email
};

const u1 = new user("prathamesh","prathamesh@gmail.com");

for(let key in u1){
    console.log(u1[key]);
}

console.log("added mobile property");

u1.mobile="9548117070";  //so we can dynamically change the object so it is dynamic

for(let key in u1){
    console.log(u1[key]);
}


console.log("delete mobile property");
delete u1.mobile;  //we can also delete the property of the objects;


for(let key in u1){
    console.log(u1[key]);
}

const count = Object.keys(u1);

console.log("count = "+count);  //this will return the array of list of properties of the object u1
// count = name,email

if("name" in u1)  //checking the existance of the property in object;
{
    console.log("u1 has name property");
}

