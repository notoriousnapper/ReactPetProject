// TODO: Write a timer class when you get the chance
/*
 * Features: Set Speed:
 * Set Mode (#s 1-9)
 * Set Mode (#Letters)
 * Set input (List) --> you wanna practice + ====>
 */

 /*
  * Less known arrays/ etc.
  */

// READ: https://stackoverflow.com/questions/8126466/how-do-i-reset-the-setinterval-timer


var numberList = [1,2,3,4,5,6,7,8,9];
// Simple Random Print

var printFn = console.log;
var invokeRandomlyOnListItem= (list, fn) => {
  // Make sure both inputs are there (javascript not defined to must have)
  var index = Math.floor(Math.random()*list.length);
  fn(list[index]);
}
// Function - give a list and a function, runs function randomly or IN ORDER of choice
// Array of Functions - in the order they came in ---> Etc.? BC - setstate/ call, etc.
// ----> Randomizer + Sequencer
// TODO: - MMRZ how to do this/ CACHE it in BOOSTNOTES! LEGGO!
// "BASIC Notes"

invokeRandomlyOnListItem(numberList, alert);
invokeRandomlyOnListItem(numberList, printFn);

// TODO: Change this into a class!
// Written this way b/c of readability
// THIS FUNCTION CONFIGURES, RUNS, AND RETURNS A TIMER OBJECT
// Own by objects to make easier ---> one wrapper plz .start() .stop()
// REVIEW JS BINDING TOMORROW = TIMER + Object + Setting

var configureAndRunTimer = (list, fn, speed)=>{ // Should be FN Array in future
  let buildFn = ()=>{invokeRandomlyOnListItem(list, fn);}
  return setInterval(buildFn, speed);
}
var timer = configureAndRunTimer(numberList, printFn, speed);
clearInterval(timer);

// Have a speedMap
var speed = {
  1: 1000,
  2: 2000,
  3: 3000
}

// timer(numberList, printFn, 3000);
// timer.configure() // figure out async later
// timer.start() // should be like this
var timerObject = {
  timer: null,
  config: {},
  specialConfig: function(){
    this.configureTimer.bind(this);
  }
  configureTimer: function(list, fn, speed){
    this.config = {
      list: list,
      builtFn: fn,
      speed: speed // add map or sth
    }
    console.log("Built config list: " + list);
    console.log("Built config fn: " + fn);
    console.log("Built config speed: " + speed);
    console.log(this.config);
    console.log("THAT IS THIS" + this);
  }.bind(this),

  startTimer: function(){
    console.log("Starting Timer!");
    this.timer = setInterval(this.config.builtFn, this.config.speed);
  }.bind(this),

  stopTimer: function(){
    console.log("Stopping Timer!");
    clearInterval(this.timer)
  }.bind(this)
}


// HARDCODED FOR NOW
// JUST DELIVER FIRST SO YOU CAN PRACTICE! --> @TONIGHT
// @TONIGHT: RVW JAVASCRIPT BINDING OF THIS FFS ====> 
var config = {
  list: numberList,
  fn: printFn,
  speed: 3000
}
exports.createTimer = configureAndRunTimer;
