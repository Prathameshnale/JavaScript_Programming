const circle ={
    radius:"5",       //radius and location are the properties and draw is the method of object circle.
    location:{
        x:"1",
        y:"2"
    },
    draw(){
        console.log("inside draw function of circle...");
    }
};

circle.draw();


//in above example if we want to multiple object of same properties and methods then we need to create every time
//new object so to avoid that we can use two methods Factory funtion and constructor function 

//factory function - 


function createObjects(radius){
     return {
        radius,     //i.e radius:radius,
    draw1: function(){
        console.log("inside createObject function...");
    }
     }
};


const circle1 = createObjects(5);
circle1.draw1();
//now we can make multiple object of circle1 by giving just call to the createObject function and passing
//values of properties of that object

//if we use return keyword then it refered as factory function.


//constructor function

function Circle3(radius){     //constructor name should start with capital letter
    this.radius=radius,       //constructor function does not need to write return keyword it will 
    this.draw= function(){      //automatically return the function
        console.log("inside constructor method..");
    }
};

const cirobj = new Circle3(5);
cirobj.draw();

//if we use this keyword along with new operator as above then it is called as constructor function.




// console.log("practice...");

// function square(length){
//     return{
//         length:length,
//         area:function abc(){
//             console.log("inside area function...");
//         }
//     };
// }


// const v1 = square(5);
// v1.area();


// function Square(length){
//     this.length=length,
//     this.area= function areaOf(){
//         console.log("inside constructor function...")
//     }
// }

// const v2 = new Square(10);
// v2.area();