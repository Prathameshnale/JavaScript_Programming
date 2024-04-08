function newObj(value){
    this.value=value,
    this.draw=function(){
        console.log("inside draw function of constructor function");
    }
}


let obj1=new newObj(10);
console.log(obj1.value);
obj1.draw();