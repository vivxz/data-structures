// Stack: LIFO (last in first out)
var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
    return counter;
  };

  someInstance.pop = function() {
      if(counter <= 0){
          return;
      }
    counter--;
    var remove = storage[counter];
    delete storage[counter];
    return remove;
  };

  someInstance.size = function() {
//       var key = Object[keys](storage);
//       return key.length;
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

var stack = new Stack();