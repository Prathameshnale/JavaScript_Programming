function Circle(radius){
    console.log("hi");
    this.radius=radius,
    this.draw = function(){
        console.log("inside draw function...");
    }
};

//we can call the Circle object by 2 way 
const obj1 = new Circle(5);  //1 way  ,here we passes two arguments one is this and second is 5(radius)
obj1.draw();


Circle.call({},5);  //2 way , here {} have this and second is 5 (radius)


Circle.call({},[1,2,3]); //if we want to pass array then we should pass like this

//basically functions and arrays are the objects in javaScript






function Square(length){
    this.length=length,
    this.abc=function(){
        console.log("Inside sqaure function....");
    }
}

const v1 = new Square(5);
v1.abc();

const Square1 = new Function('length', `
this.length=length,
    this.abc=function(){
        console.log("Inside sqaure function....1");
    }
    `)


const v2 = new Square1(10);
v2.abc();