/*
There are 5 types of loops in js

1. for loop
2. for in loop
3. for of loop
4. while loop
5. do while loop


1. for loop ->

    for(let i=0;i<=10;i++){
        console.log(i);
    }


    
2. for in loop  (basically it is used to print the all key's present in the object)

      let obj={
        prathamesh:8876,
        swapnil:5652,
        arjun:9654,
        digvijay:4554
    };

    for(let a in obj){
        console.log("marks of "+a+" are "+obj[a]);
    }

    output:
        marks of prathamesh are 8876
        marks of swapnil are 5652
        marks of arjun are 9654
        marks of digvijay are 4554




3. for of loop (basically for of loop is used with array or it should be used the iterable object)

    for(let a of "prathamesh"){       //so here "prathamesh" is iterable.
        console.log(a);
    }

    output:
    p
    r
    a
    t
    h
    a
    m
    e
    s
    h


// 4. while loop  (while loop check the condition first and then execute the blocks of statements if 
                   dondition is true .i.e while loop stop executing until the condition become the false)


let i=0;
while(i<10){
    console.log(i);
    i++;
}

    output:
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9



// 5. do while loop  (do while loop is same as while loop but in do while loop first at list one time all set
                     of line executes and then condition will be check and if condition becomes true then
                    it will run again . i.e  do while loop also stop executing until the condition becomes
                    false)

    let a=10;
    do{
       console.log(a);
       a--;
    }while(a!=0);

    output:
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1
*/