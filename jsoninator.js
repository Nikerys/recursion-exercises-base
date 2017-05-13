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
  const storage = _.map(array, function(element) {
    return stringify(element);
  });
  return storage;
}

const printObject = function(obj){
  const storage = _.each(obj, function(value, key, iteratedObj) {
    return stringify(key)+':'+ stringify(value);
  });
  return storage;
};

//////////////////////////////////////////////
const stringify = function(obj) {
  
  ////FOR STRING///
  if (typeof obj === "string"){
    return printString(obj);
  }
  ////////////////

///FOR ARRAY///
  if (Array.isArray(obj)){
    return "[" + printArray(obj) + "]";
  }
///////////////

  if (typeof obj === "object"){
    return printObject(obj);
  }

///FOR ANYTHING ELSE///
  if (true){
    return printElse(obj);
  }
//////////////////////
};

module.exports = {
  stringify: stringify
};