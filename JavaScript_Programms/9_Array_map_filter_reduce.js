// arr.map();      //it will create or return a new array

let arr = [11,52,65,95,84,54];


arr.map((value)=>{       //this will print and return a new array with tha same value
    console.log(value);
    return value;
})


console.log("**************************")
let arr1= arr.map((value)=>{    //it will return a new array and store in arr1 with each value+1 of arr
    return value + 1;
})
console.log(arr1);

//basic difference between forEach and map function is ForEach loop does not create new array but map creats
// new array /return new array.

arr = [11,52,65,95,84,54];

let newarr = arr.map((value,index,array)=>{
    console.log("value = "+value+" index = "+index+" array = "+array);
    return value+index;
})

console.log("newarr = "+newarr);
//map() functions has three parameters value,index,array respectively we can use any of these.







console.log();
//arr.filter();    //basically filter method is used to filter the elements from array by using our own logic.
                    //it will also return a new array
console.log("filter method");

arr = [1,5,98,65,32,45,75,62,15,23,45,51,23,21,82];

let arr3 = arr.filter((ele)=>{
    return ele<50;    //so here we write our won logic to filter out the elements which is less than 50;
})

console.log("arr3 = "+arr3);









console.log();
// arr.reduce()     // reduce will reduce the whole array into a single value 
                    // reduce will return single value.
console.log("filter method");

arr = [1,5,98,65,32,45,75,62,1,82]; 

let newarr2 = arr.reduce((p,q)=>{   //so here p and q first time will take first two elements and make addition
    return p + q;                  //and next time that result of addition and next elements makes addition
})                //then third time that addition and next elements gets add and so on.... this is how 
   //reduce functions returns whole array into a single value.

console.log("newarr2 = "+newarr2);





