module.exports.copy = function(object){
var newObject = {};
for (var key in object){
  newObject[key] = object[key]
}
return newObject;
};

module.exports.extend = function(dest, srce){
  for (var key in srce){
    dest[key] = srce[key];
  }
  return dest;
 };

module.exports.hasElems = function(object, arrayOfElements){
  for (var x=0; x < arrayOfElements.length; x ++){
    if(!object.hasOwnProperty(arrayOfElements[x])) {
      return false;
    }
    }
        return true;
  };