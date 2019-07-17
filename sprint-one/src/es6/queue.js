class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.count = 0;
  	this.next = 0;
  }
  enqueue(value){
  	this.storage[this.count] = value;
  	this.count++;
  }
  dequeue(){
  	if(this.count > this.next){
  		var remove = this.storage[this.next];
  		delete this.storage[this.next];
  		this.next++;
  		return remove;
  	}
  }
  size(){
  	return this.count - this.next;
  }

}
