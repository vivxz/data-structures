var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = {
  	storage: {},
  	count: 0,
  	next: 0
  };
  extend(someInstances, queueMethods);

  return someInstances;
};

var queueMethods = {
	enqueue: function(value){
		this.storage[this.count] = value;
		this.count++;
	},
	dequeue: function(){
		if(this.count > this.next){
			var remove = this.storage[this.next];
			delete this.storage[this.next];
			this.next++
			return remove;
		}
	},
	size: function(){
		return this.count - this.next;
		// for(var key in this.storage){
		// 	if(this.storage.hasOwnProperty(key)){
		// 		this.count++;
		// 	}
		// }
		// return this.count - this;
	}
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

