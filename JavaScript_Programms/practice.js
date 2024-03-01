function circle(radius,color){
    this.radius=radius;
    this.color=color;
    
    Object.defineProperty(this,"color",{
        get:function(){
            return color;
        }
    })
}


const c1 = new circle(5,"white");
const a=c1.color;
console.log(a);