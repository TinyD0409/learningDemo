var tinyd0409 = {
  //Array
  chunk: function(array, size) {
    var result = []
    for (j = 0;j<array.length;j+=size){
      var ar = []
      for (var i = 0; i < size ; i++){
        if(array[j+i] == undefined){
          break
        }
        ar.push(array[j+i])
      }
      result.push(ar)
    }
    return result
  },
  compact: function(array){
    for(var i = 0; i < array.length ;i++){
      if(array[i] == undefined||array[i] == null||array[i] == true ||array[i] == false ||array[i] == NaN){
        array.splice(i,1)
      }
    }
    return array
  },
  concat: function(array, [values]){
    
  },
  difference: function(array, values){
    var map = {}
    for (var i = 0;i < values.length ; i++){
      if(values[i] in map){
      }else{
        map[values[i]] = true
      }
    }
    for(var j = 0;j < array.length ; j++){
      if(array[j] in map){
        array.splice(j,1)
      }
    }
    return array
  },
  join: function(array, separator){
    var result = ""  
    if(separator == undefined){
      separator = ","
    }
    for (var i = 0;i < array.length; i++){
      result = result + separator + array[i]
    }
    return result
  },
  last: function(array){
    return array[array.length-1]
  },
//Math
  add: function(augend, addend){
    return augend + addend
  },

  ceil: function(number, precision){

  },
  divide: function(dividend, divisor){
    return dividend/divisor
  },



}
