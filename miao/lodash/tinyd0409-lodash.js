// * 不要使用转换为字符串再转回去的办法实现任何函数
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
      if(array[i] == undefined||array[i] == null||array[i] == false ||isNaN(array[i] == true)){
        array.splice(i,1)
        i--
      }
    }
    return array
  },
  concat: function(array, ...values){
    var arg = []
    for(var i = 0;i < arguments.length;i++){
      arg.push(arguments[i])
    }
    return arg.reduce(
      function(result,cur,index,array){
        result.push(cur)
        return result
      },[])
  },
  /**
   * [difference description]
   * @param  {[type]} array  [description]
   * @param  {[type]} values [description]
   * @return {[type]}        [description]
   */
  difference: function(array, ...values){
    //values 是大于等于一的一堆s数组值
    var map = {}

    for (var i = 1;i < arguments.length ; i++){
      for (var j = 0; j < arguments[i].length; j++){
        if(arguments[i][j] in map){
        }else{
          map[arguments[i][j]] = true
        }
      }
    }
    for(var j = 0;j < array.length ; j++){
      if(array[j] in map){
        array.splice(j,1)
        j--
      }
    }
    return array
  },
  drop:function(array,num){
    if(num == 0){
      return array
    }
    num = num||1
    var result = []
    for(var i = num;i < array.length;i++){
      result.push(array[i])
    }
    return result
  },
  dropRight:function(array,num){
    if(num == 0){
      return array
    }
    num = num||1
    var result = []
    for(var i = 0;i < (array.length-num); i++){
      result.push(array[i])
    }
    return result
  },
  fill:function (array,value,start,end){
    if(start == undefined){
      start = 0
    }
    if(end == undefined){
      end = array.length
    }
    for(var i = start; i < end; i++){
      array[i] = value
    }
    return array
  },
  filter:function(array,f){
    return array.reduce(
      function(result,cur,index,array){
        if(f(cur,index,array)){
          result.push(cur)   
        }
        return result
      },[])
  },
  flatten:function(array){
    var newarray = []
    for(var i = 0; i < array.length; i++){
      do{
        array[i]
      }while(Array.isArray(array) == false)
    }
  },
  join: function(array, separator){
    var result = ""  
    var str = ""
    if(separator == undefined){
      separator = ","
    }
    for (var i = 0;i < array.length; i++){
      result = result + separator + array[i]
    }
    for(var j = 1; j < result.length; j++){
      str = str + result[j]
    }
    return str
  },
  last: function(array){
    return array[array.length-1]
  },
  slice : function(array,start,end){
    if(start == undefined){
      start = 0
    }
    if(end == undefined){
      end = array.length
    }
    var result = []
    for (var i = start;i<end;i++){
      result.push(array[i])
    }
    return result
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
  negate:function(f){
    return function(...args){//接受所有需要传给f的参数
     return !f(...args)
    }
  //调用时候相当于 fc = n(f)
  //fc(要传给函数f的变量)
  /*
    function f (bool){return bool}
    调用 n(f)(true)
     返回 false
     可以理解成类似闭包
     b = n(f)
     ƒ (...args){
         return !f(...args)
        }
     b(false)
     true
  */
  },
  range :function (start,end,step){
    //只传一个参数，默认是第一个参数
    if(arguments.length == 1){
      end = arguments[0]
      start = undefined
    }
    if(start == undefined){
      start = 0
    }
    if(step == undefined){
      step = 1
    }
    var array = []
    if(end > 0){
      for (var j = 0,i = start; j < (end - start)&&i < end; j++,i+= step){
        array.push(i)
      }
    } else {
      for (var i = start; i > end; i-=Math.abs(step)){
        array.push(i)
      }
    }
    return array
  },
  sum:function(array){
    var result = 0
    for (var i = 0;i < array.length; i++){
      result = result + array[i]
    }
    return result
    /*
    return array.reduce((pre,cur,index,array) => {
    pre = pre + cur
    return pre})
     */
  },

// 要判断的两个对象 
  isEqual: function(value,other){
    if(value === other){
      return true
    }
    if(value !== value && other !== other){
      return true
    }
    if(Array.isArray(value)&&Array.isArray(other)){
      if(value.length == other.length){
        for(var i = 0; i < value.length; i++){
          if(tinyd0409.isEqual(value[i] , other[i])){
          }else {
            return false
          }
        }
        return true
      }else{
        return false
      }
    }
    if (typeof(value) == "object" && typeof(other) == "object") {
      var valuemap = []
      var othermap = []
      for(var atr in value){
        valuemap.push(atr)
      }
      for(var art in other){
        othermap.push(art)
      }
      if(tinyd0409.isEqual(valuemap,othermap)){
        for(var i = 0;i < valuemap.length; i++){
          if(tinyd0409.isEqual(value[valuemap[i]],other[othermap[i]])){
          }else{
            return false
          }
        }
        return true  
      }
    }
    return false
  },
  map : function (array, f){
    return array.reduce(
      function(result,cur,index,array){
        result.push(f(cur,index,array))
        return result
    },[])
  },
}
