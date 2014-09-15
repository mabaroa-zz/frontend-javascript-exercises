module.exports.createCourse = function(title,duration,students){
 return {
  title: title,
  duration: duration,
  students: students
 };
};

module.exports.addProperty = function(object,newProp,newValue){
  if (object[newProp] == undefined) {
    object[newProp]= newValue;
   return object;
}
 else {
   return object;
  }
};

module.exports.formLetter = function(letter){
return "Hello " + letter.recipient + "," + "\n\n" + letter.msg  + "\n\n" + "Sincerely," + "\n" +letter.sender
};

module.exports.canIGet = function(item, money) {
  var priceChart = {
   "Mac Pro": 2499,
   "MacBook Pro": 1299,
   "MacBook Air": 999,
   "Apple Sticker": 1
  }
  return priceChart[item] <= money;
  };
