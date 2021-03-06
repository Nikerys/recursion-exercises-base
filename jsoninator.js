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
  const storage = _.map(obj, function(value, key, object) {
    return stringify(key) + ":" + stringify(value);
  });
  return storage;
}

const stringify = function(obj) {

  if (typeof obj === "string"){
    return printString(obj);
  }

  if (Array.isArray(obj)){
    return "[" + printArray(obj) + "]";
  }

  if (typeof obj === "object" && obj !== null){
    return "{" + printObject(obj) +"}";
  }

  if (true){
    return printElse(obj);
  }
};

module.exports = {
  stringify: stringify
};