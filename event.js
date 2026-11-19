
 console.log("1.program started");
 process.nextTick(()=>{
console.log("2.process.nextTick()");
 });
 setTimeout(()=>{
    console.log("3.setTimeout()");
 }, 100);
 setTimediate(()=>{
    console.log("4.steTimediate()");
 });
