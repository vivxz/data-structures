var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	storage: {},
  	count: 0
  };
  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
	push: function(value){
		this.storage[this.count] = value;
		this.count ++;
	},
	pop: function(){
		if(this.count <= 0){
			return;
		}
		this.count--;
		var remove = this.storage[this.count];
		delete this.storage[this.count];
		return remove;
	},
	size: function(){
		return this.count;
		// var count = 0;
		// for (var key in this.storage){
		// 	if(this.storage.hasOwnProperty(key)){
		// 		count++;
		// 	}
		// }
		// return count;
	}
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};