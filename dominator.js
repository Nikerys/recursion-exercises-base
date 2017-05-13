const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const array = flattenTreeToArray(root);
  const element = _.filter(array, child => {
    return child.id === id;
  });
  return element[0];
};

const getElementsByClassName = function(root, className) {
  const array = flattenTreeToArray(root);
  const element = _.filter(array, child => {
    if (child.className === undefined){
    } else if (!(child.className.indexOf(className)=== -1)){
      console.log(child.className)
      return true;
    }
  });
  return element;
};

const getElementsByTagName = function(root, tagName) {
  const array = flattenTreeToArray(root);
  const element = _.filter(array, child => {
    return child.tagName === tagName;
  });
  return element;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
