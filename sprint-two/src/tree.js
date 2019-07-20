// Hierarchical data structure consisting of node with children
// Referred to recusive data structure
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  Object.assign(newTree, treeMethods);
  newTree.children = [];  // An array containing a number of subtrees

  return newTree;
};

var treeMethods = {};

// Takes any value, sets that as the target of a node, and add that node as a child of the tree
treeMethods.addChild = function(value) {
	var newChild = Tree(value);
	this.children.push(newChild);
};

// Takes any input and returns a boolean whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
	if (this.value === target){
		return true;
	}
	for (var i = 0; i < this.children.length; i++){
		if (this.children[i].contains(target)){
			return true;
		}
	}
	return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 Linear O(n)
 */
