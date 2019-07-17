//Queue: FIFO (first in first out)
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var next = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
    return value;
  };

  someInstance.dequeue = function() {
    var remove = storage[next];
    delete storage[next];
    next++;
    return remove;
  };

  someInstance.size = function() {
    var count = 0;
    for(var key in storage){
      if(storage.hasOwnProperty(key)){
        count++;
      }
    }
    return count;
  };

  return someInstance;
};
