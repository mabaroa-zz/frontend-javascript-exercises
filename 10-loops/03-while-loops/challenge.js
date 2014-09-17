module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn() == true){
    actionFn()
  }
}

module.exports.sumNumbers = function(array){
  var sum = 0
  while(array != 0){
    for (var counter = 0; counter < array.length; counter ++)  {
      sum = sum + array[counter]
    }
    return sum
  }
  return 0
}
