var LinkedList = function() {
  var list = {}
  list.head = null; // a linkedListNode instance
  list.tail = null; // a linkedListNode instance

  // takes a value and adds it to the end of the list
  list.addToTail = function(value) {
    var node = new Node(value);
    if(list.head === null){
      list.head = node;
    } 
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
  };
  
  //removes the first node from the list and returns its value
  list.removeHead = function() {
    var prevNode = list.head;
    list.head = list.head.next;
    return prevNode.value;
  };

  // returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target) {
    var current = list.head;
    while(current !== null){
      if(current.value === target){
        return true;
      } else {
        current = current.next;
      }
    }
    return false; // if not found;
  };

  return list;
};

// A node only knows about what data it contains, and who its neighbor is.
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Constant O(1)
 */
