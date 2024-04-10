//Object clone -> copy all the properties of one object into another object is called as cloning of an object.

// 1 way ->  using for each loop

const obj1={
    name:"abc",
    id:8876,
    email:"abc@gmail.com"
}
console.log(obj1);

const obj2={};

for(let a in obj1){
    obj2[a]=obj1[a];    //it will copy all the properties and it's values of obj1 into obj2.
}
console.log(obj2);



//2 way -   using assign method of Object
console.log();

const p1 = {
    name:"prathamesh",
    email:"prathamesh@gmail.com",
    no:9548
}
console.log(p1);

const p2 = Object.assign({},p1);  //this assign method of Object will copy p1 into p2.
console.log(p2);



//3 way -> using spred operator.
console.log();

const o1 = {
    name:"abcd",
    email:"abcd@gmail.com",
    id:15
}
console.log(o1);


const o2={ ... o1};
console.log(o2);
