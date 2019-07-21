// Hash tables store key value pairs by using "hash function" that turns
// keys into numeric numbers indices located in a memory bank.
var HashTable = function() {
  this._limit = 8; // length of the array
  this._storage = LimitedArray(this._limit); //{var storage = [], get: f(x), set: f(x), each: f(x)}
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // creates an index for our storage using the hashing function
  var bucket = this._storage[index]; // retrieve the bucket at this particular index, if exists
  if (!bucket){
  	var bucket = []; // if a bucket doesn't exist, create one
  }
  this._storage[index] = bucket; // insert the bucket into the hashTable

  var overwrite = false;
  for(var i = 0; i < bucket.length; i++){
  	var tuple = bucket[i];
  	if(tuple[0] === k){
  		tuple[1] = v; // overwrite value stored at this key
  		overwrite = false;
  	}
  }

  if (!overwrite){
  	bucket.push([k, v]); // added key,value pairs to our storage
    // res
  }
  return this;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if(!bucket){
  	return undefined;
  }

  for (var i = 0; i < bucket.length; i++){ // iterating over the bucket
  	var tuple = bucket[i];
  	if(tuple[0] === k){ // if the key is inside the bucke
  		return tuple[1];
  	}
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if(!bucket){
  	return undefined;
  }

  for (var i = 0; i < bucket.length; i++){ // iterating over the bucket
  	var tuple = bucket[i];
  	if(tuple[0] === k){ // if the key is inside the bucket
  		bucket.splice(i, 1);
  		return tuple[1];
  	}
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._limit = newLimit;

  oldStorage.forEach(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 Constant O(1)
 */


