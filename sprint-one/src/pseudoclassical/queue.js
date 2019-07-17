var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.count = 0;
  this.next = 0;
};

Queue.prototype.enqueue = function(value){
	this.storage[this.count] = value;
	this.count++;
};
Queue.prototype.dequeue = function(){
	if(this.count > this.next){
		var remove = this.storage[this.next];
		delete this.storage[this.next];
		this.next++
		return remove;
		}
};
Queue.prototype.size = function(){
	return this.count - this.next;
		// for(var key in this.storage){
		// 	if(this.storage.hasOwnProperty(key)){
		// 		this.count++;
		// 	}
		// }
		// return this.count - this;
	};

