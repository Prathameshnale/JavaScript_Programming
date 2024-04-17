/*
 String in js usually used to store or manipulate the text.

//String can be created in 3 ways
1. Double quote
2. single quote
3. template literal

*/

let first = "prathamesh";  //using double quote

let second = 'prathamesh'; //using single quote

let third = `prathamesh`;  //using back tick  or template literal

console.log(first+" "+second+" "+third);

//back tick used to keep string as it is.
let sample = `prathamesh       
               nale   "pune". `;

console.log(sample);

let boy="Vishwas";
let girl="Saroj";
let sentense1 = `boy is a friend of girl`;


//string interpulation
let sentense2 = `${boy} is a friend of ${girl}`;   //this is called as string ineterpulation

console.log(sentense1);
console.log(sentense2);



//Excap sequence character  (use back slash \ for escap sequence character , it will escap the real
//                            meaning of character next to the \)

let a="prathamesh\'s bike";
console.log(a);

let b='\'prathamesh\'';
console.log(b);





//string methods
//1. length

//IMP Note -> In java            for String str="abc";    str.length();
//                               for int[] arr={1,2,5};   arr.length;
//            In JavaScript      for let name="abc";     name.length;
//                               for let arr=[10,"null"]; arr.length;

let s1 = "prathamesh";
console.log(s1.length);  //10

let s2 = "prathamesh\'";
console.log(s2.length);  //11 not 12 it will consider \' as one character.

//2. toLowerCase() and 
//3. toUpperCase()

let s3 ="Prathamesh";
console.log("toUpperCase() = "+s3.toUpperCase());
console.log("toLowerCase() = "+s3.toLowerCase());


//4. str.slice()

let s4 = "prathamesh";
console.log("s4.slice(2,5) = "+s4.slice(2,5));  //it will print string from index 2 to 4
console.log("s4.slice(2) = "+s4.slice(2));      //it will print string from index 2 to at the end


//5. str.replace()

let s5 ="Prathamesh";
console.log("s5.replace() = "+s5.replace("Pratha","So")); //it will replace Pratha by So i.e Somesh

console.log("s5.replace() = "+s5.replace("pratha","So")); //it will not replace cause string not match
                                                          //so output remains same i.e Prathamesh.



//6. str.concat(...)

let name1 = "Prathamesh";

let frined = "Arjun";

console.log("name.concat() = "+name1.concat(" is a frined of "+frined+" at pune."));


//7. str.trim()


let s6 = "      Rushikesh   Mhetre     .";
console.log("s6 = "+s6);
console.log("s6.trim() = "+s6.trim());


//we can access charachters from string by using index

let s7 = "M S Dhoni";

console.log("s7[0] = "+s7[0]);
console.log("s7[1] = "+s7[1]);
console.log("s7[2] = "+s7[2]);
console.log("s7[3] = "+s7[3]);
console.log("s7[4] = "+s7[4]);

//but we cannot modify original string

s7[0]="P";
s7[2]="N";
console.log(s7);  //M S Dhoni

//String are immutable in js 
//i.e string in js cannot modifiable or changable