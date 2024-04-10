function Person(name,email){
    this.name=name;
    this.email=email;
    let id=5;
    this.display=function(){
        console.log("inside display function of Person");
    }

    Object.defineProperty(this,"id",{
        set:function(id1){
            id=id1;
        },
        get:function(){
            return id;
        }
    })
}


let p1=new Person("prathamesh","prathameshn7077@gmail.com");
console.log(p1.name,p1.email,p1.id);
p1.display();
p1.id=100;
console.log(p1.id);
