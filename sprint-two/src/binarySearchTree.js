var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
    newTree.value = value;
    
    // .left property - where values are lower than the current value
	  // .right property - where values are higher than the current value
    newTree.right;
    newTree.left;

  return newTree
};

// .insert() - accepts a value and places it in the tree in the correct position
BinarySearchTree.prototype.insert = function (value) {
  var branch = BinarySearchTree(value);

  var recursiveInsert = function(binaryTree) {
    if(binaryTree.value > value){
      if(binaryTree.left === undefined){
        binaryTree.left = branch;
      }
      recursiveInsert(binaryTree.left);
    };
    if(binaryTree.value < value){
      if(binaryTree.right === undefined){
        binaryTree.right = branch;
      }
      recursiveInsert(binaryTree.right);
    }
  }
  recursiveInsert(this);
};

// .contains() - accepts a value and returns a boolean whether it's contained in the tree
BinarySearchTree.prototype.contains = function (target) {
  var contained = false;

  var recursiveContains = function(binaryTree) {
    if (binaryTree.value === target) {
      contained = true;
    } 
    if(binaryTree.left !== undefined){
      if(target < binaryTree.value){
        recursiveContains(binaryTree.left)
      }
    }
    if(binaryTree.right !== undefined){
      if(target > binaryTree.value){
        recursiveContains(binaryTree.right);
      }
    }
  }
  recursiveContains(this);
  return contained;
};

// .depthFirstLog() - accepts a callback and executes it on every value
BinarySearchTree.prototype.depthFirstLog = function (cb) {
  var recursiveCb = function(binaryTree) {
    cb.call(binaryTree, binaryTree.value);

    if (binaryTree.left !== undefined) {
      recursiveCb(binaryTree.left)
    }
    if (binaryTree.right !== undefined) {
      recursiveCb(binaryTree.right);
    }
  }
  recursiveCb(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 logarithmetic O(logn)
 */