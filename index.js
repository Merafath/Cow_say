const {name,campus} = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hello I'm " + name + " " + "from" + " " + campus + " " + "Campus!",
    e : "oO",
    T : "U "
}));
