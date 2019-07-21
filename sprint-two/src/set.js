var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this._storage[item] = 1;
	this.size++;
};

setPrototype.contains = function(item) {
	if(this._storage[item]){
		return true;
	}
	return false;
};

setPrototype.remove = function(item) {
	delete this._storage[item];
	this.size--;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Constant O(1)
 */
