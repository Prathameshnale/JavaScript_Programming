// Abstraction in JS

//hidding complexity and display only essencial data is called as abstraction


function Circle(radius){
    this.radius=radius;
    let location=100;
    let draw=function(){
        console.log("Inside draw function...");
    };
    this.abc=function(){
        console.log("inside abc function");
        
    }

}  //in above object location and abc are the hidden members of Circle object

const c1 = new Circle(5);
console.log("c1 = "+c1.radius,c1.location);



//Setters and Getters 
function Circle(radius){
    this.radius=radius;
    let location=10;
    
    Object.defineProperty(this,"location",{
        get: function(){
            return location;
        },
        set: function(x){
            location=x;
        }
    })

}  //in above object location and abc are the hidden members of Circle object

const c2 = new Circle(5);
console.log("c2 = "+c2.location);
c2.location=500;
console.log("c2 = "+c2.location);

