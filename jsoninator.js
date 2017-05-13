const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const printString = function(obj){
  return '"'+obj+'"'
}

const printElse = function(obj){
  return String(obj);
}

const printArray = function(array){
  return _.map(array, function(element) {
    console.log(stringify(element));
    return '"'+stringify(element)+'"';
  });
}

//////////////////////////////////////////////
const stringify = function(obj) {
  ////FOR STRING///
  if (typeof obj === "string"){
    return printString(obj);
  }
  ////////////////

///FOR ARRAY///
  if (Array.isArray(obj)){
    printArray(obj);
    return "[" + obj.toString() + "]";
  }
///////////////


///FOR ANYTHING ELSE///
  if (true){
    return printElse(obj);
  }
//////////////////////
};

module.exports = {
  stringify: stringify
};