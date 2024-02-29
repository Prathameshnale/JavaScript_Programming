//exercise ,create a stopwatch having functionality as start, stop , duration, reset

function stopwatch(){
    let startTime,endTime,runnig,duration=0;

    this.start = function(){
        if(runnig){
            throw new Error("already start");
        }
        runnig=true;
        startTime=new Date();
    }
    
    this.stop = function(){
        if(!runnig)
        {
            throw new Error("already stop");
        }
        runnig=false;
        endTime=new Date();

        const second = (endTime.getTime()-startTime.getTime())/1000;
        duration = duration+second;
    }
    

    
    this.reset = function(){
        startTime=null;
        endTime=null;
        duration=0;
        runnig=false;
    }

    Object.defineProperty(this,"duration",{
        get: function(){
            return duration;
        }
    })
}

const sw1 = new stopwatch();
sw1.start();
sw1.stop();
console.log(sw1.duration);