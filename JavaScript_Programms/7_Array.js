let array=[];   //array litral

let color=[10,20.20,null,"black"];
console.log(color);
console.log(color[0]);  //10
console.log(color[1]); //20.20
console.log(color[2]); //null
console.log(color[3]); //black
console.log(color[4]);  //undefined

color[2]="voilet";  //size of array dynamic i.e Dynamic typed array.

console.log(color);

color[3]=5;    //we can store any data type i.e Dynamic typed array.

console.log(color);
//arrays in js are mutable
//i.e array can be modifiable or they can be changed in js.

//array is object type in js
//it is dynamic typed array (i.e both size and data can be change)




console.log();
//array methods

//1 arr.length;

let arr = [10,20,30,"prathamesh",50.7];
console.log("arr.length = "+arr.length);




console.log();
//2 arr.toString();    convert object type array into string type array

console.log("arr.toString() = "+arr.toString());
console.log("typeof(arr.toString()) = "+typeof(arr.toString()));  //String


console.log();
//3 arr.join(); 

//convert ojbect type array into string type and also added new character to each element.

console.log("arr = "+arr);
console.log("typeof(arr) = "+typeof(arr));

console.log("arr.join('_') = "+arr.join('_'));
console.log("typeof(arr.join('_')) = "+typeof(arr.join('_')));  //string



console.log();
//4 arr.pop();     it will remove the last element from the original array and returns the deleted element

console.log("arr = "+arr);
console.log("arr.pop() = "+arr.pop());
console.log("arr = "+arr);



console.log();
//5 arr.push()    it will add new element at the end of the array and returns the new length of the array.

console.log("arr = "+arr);
console.log("arr.push(8876) = "+arr.push(8876));  //it will returns the new array length.
console.log("arr = "+arr);



console.log();
//6 arr.shift()  it will delete the first element from original array and returns the deleted element

console.log("arr = "+arr);
console.log("arr.shift() = "+arr.shift());  //it will returns the deleted element
console.log("arr = "+arr);


console.log();
//7 arr.unshift() it will add new element in array at first position and returns the new length of array

console.log("arr = "+arr);
console.log("arr.unshift(879) = "+arr.unshift(879));  //it will returns the new length of array.
console.log("arr = "+arr);


console.log();
//8 delete arr[index];   it will delete the element but not affects on the length of array.

console.log("arr = "+arr);
console.log("arr.length = "+arr.length);
console.log("delete arr[0] = "+delete arr[0]);    //it will return true if deleted successfuly otherwise false.
console.log("arr = "+arr);
console.log("arr.length = "+arr.length);



console.log();
//9 arr.concat();    it will concat two or more than two array and returns the new arrayf

let arr1 = [1,2,3,4,5];
let arr2 = [11,12,13,14,15];
let arr3 = [111,222,333,444,555];
console.log("arr1 = "+arr1);
console.log("arr2 = "+arr2);
console.log("arr3 = "+arr3);


let newarr1 = arr1.concat(arr2);
console.log("newarr1 = "+newarr1);

let newarr2 = arr1.concat(arr2,arr3);
console.log("newarr2 = "+newarr2);




console.log();
// arr.sort();   //it will sort the element based on occurence or alphabet not acending or decending until
                //we do not provoid the compare method
                 // and it will change the original array.
                 

let newarr = [1,2,6,545,21,56,95,8,4,5];
console.log("newarr = "+newarr);
console.log("newarr.sort() = "+newarr.sort());
console.log("newarr = "+newarr);


const compare1=(a,b)=>{     //this will help to sort the arrat elements in acending order
    return a - b;
}

console.log();
console.log("newarr = "+newarr);
console.log("newarr.sort(compare1) = "+newarr.sort(compare1));  //sort for asending order
console.log("newarr = "+newarr);


const compare2 = (a,b)=>{     //this will help to sort the array elements in decending order
    return b - a;
}

console.log();
console.log("newarr = "+newarr);
console.log("newarr.sort(compare2) = "+newarr.sort(compare2));  //sort for decending order
console.log("newarr = "+newarr);





console.log()
// arr.reverse()      //it will reverse the original array

arr = [10,50,20,6,0,46,5,51,62,54];

console.log("arr = "+arr);
console.log("arr.reverse() = "+arr.reverse());    //it will reverse the original array
console.log("arr = "+arr);






console.log();
// arr.splice(...);    it is used to remove and add elements in array at the same time and
//                      it will modify the original array but arr.splice() returns the array of
//                      deleted elements only.

//Syntax 
//arr.splice(from index, number of elelment to be delete from index, list of elements to be add from index );

arr = [10,50,20,61,10,46,5,51,62,54];

console.log("arr = "+arr);
let a = arr.splice(3,2,111,222,333,444);    //so here from index 3 (including index 3) 2 elements will be
                                       // deleted and from index 3 (including index 3) 111,222,333,444 there
                                    //elements will be added and then remaining elements keeps as it is 
                                    //and this method will return the deleted elements only.
console.log("a = "+a);   //it will print the array of deleted elements in splice method only.                           
console.log("arr = "+arr);





console.log()
// arr.slice();         it is used to divide or create new array of from existing array
//                      it will not affect on existing array.

arr = [10,50,20,61,10,46,5,51,62,54];

console.log("arr.slice(3) = "+arr.slice(3));        //it will return new array from index 3 to end of array
console.log("arr.slice(3,6) = "+arr.slice(3,6));    //it will return new array including index 3 to index 5.


