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
var music = ['c','d','e','f','g','a','b']; // MAKE SURGE PAGE FOR YOURSELF ASAP ---> for future practice
var dummyLists = {
  numberListOne: numberList,
  music: music
  // "letter": numberList,
}

var printFn = (item)=>{console.log(item);} // Bound Function
var invokeRandomlyOnListItem= (list, fn) => {
  var index = Math.floor(Math.random()*list.length);
  fn(list[index]);
}
// Function - give a list and a function, runs function randomly or IN ORDER of choice
// Array of Functions - in the order they came in ---> Etc.? BC - setstate/ call, etc.
// ----> Randomizer + Sequencer
// TODO: - MMRZ how to do this/ CACHE it in BOOSTNOTES! LEGGO!
// "BASIC Notes"

// TODO: Change this into a class!
// Written this way b/c of readability
// THIS FUNCTION CONFIGURES, RUNS, AND RETURNS A TIMER OBJECT
// Own by objects to make easier ---> one wrapper plz .start() .stop()
// REVIEW JS BINDING TOMORROW = TIMER + Object + Setting

// timer(numberList, printFn, 3000);
// timer.configure() // figure out async later
// timer.start() // should be like this
// var timer = {

// MAIN purpose is to house "invokeRandmolyOnListItem",
// Might not even be necessary, extract if needed
var createRandomizer = function(newList, fn){
  return {
  list: newList,
  fn: function(testFn){ // meat of object
    invokeRandomlyOnListItem(this.list, testFn)
    console.log("LIST being called: ", this.list);
    }
  }
};

var createTimer = function(){
  return {
  timer: null,
  config: {},
  configure: function(list, fn, speed){
    let newConfig =  {
      list: list,
      builtFn: fn, // TODO: --> Need to take care of case where it will
                  // Utilize the list within --> might just be an object wtihin
                  // b/c you don't need to run with a randomizer function
      speed: speed // add map or sth
    }
    this.config = newConfig; // Clearer set

    console.log("New Config: " + this.config);
    console.log("Reference to This: " + this);
  },

  start: function(){
    console.log("Starting Timer!");
    console.log("CONFIG" + this.config.speed);
    console.log("BUILT FN: " + this.config.builtFn);
    this.timer = setInterval(this.config.builtFn, this.config.speed);
  },
  stop: function(){
    console.log("Stopping Timer!");
    clearInterval(this.timer)
    console.log(this.timer);
  }
  // TO ANSWER: what happens if I bind when I don't need to --> like to this functions
  // SEEMS TO GIVE THE WRONG RESULT
}
}


// HARDCODED FOR NOW
// JUST DELIVER FIRST SO YOU CAN PRACTICE! --> @TONIGHT
// @TONIGHT: RVW JAVASCRIPT BINDING OF THIS FFS ====>
var config = {
  list: numberList,
  fn: printFn,
  speed: 3000
}
exports.createTimer = createTimer;
exports.invokeFunctionOnList = invokeRandomlyOnListItem;
exports.createRandomizer = createRandomizer;
