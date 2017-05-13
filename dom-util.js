
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node

  if(node.childNodes) {
    let children = node.childNodes;
    for(let i = 0; i < children.length; i++) {
      visitAllNodes(node.childNodes[i], callback)
    }
  }
  callback(node);
};

const flattenTreeToArray = function(node) {
  let array = [];
  visitAllNodes(node, callback => array.push(callback));
  return array;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};