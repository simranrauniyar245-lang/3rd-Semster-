
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("greet", (name) => {
    console.log(`hello, ${name}!`);
});

myEmitter.on("exit", (name) => {
        console.log(`process exiting, ${name}!`);
    console.log('process exiting, ${name}!');
});

myEmitter.emit("greet", "simran");
myEmitter.emit("exit","simran");
 