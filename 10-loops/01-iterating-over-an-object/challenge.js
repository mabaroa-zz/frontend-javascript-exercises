module.exports.getKeys = function(object) {
var newArray = []
 for (val in object){
  newArray.push(val)
  }
  return newArray;
};

module.exports.getValues = function(object){
  var newArray = [];
  for(val in object){
    newArray.push(object[val]);
  }
  return newArray;
};

module.exports.objectToArray = function(object){
  var newArray = [];
  for(val in object){
    newArray.push(val + " is " + object[val]);
  }
  return newArray;
};