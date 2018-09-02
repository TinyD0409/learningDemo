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
      if(array[i] == undefined||array[i] == null||array[i] == ""||array[i] == false ||isNaN(array[i] == true)){
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
    return arg.flatten
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
  differenceBy:function (array,values,iter){
    //（array,...args)判断最后一项是否是函数
    var array0 = array.map(iter(item))
    var values = values.map(iter(item))
    var arraymap = {}
    var valuesmap = {}
    var result = []
    for(var i = 0;i < array.length;i++){
      arraymap[i] = iter(array[i])
    }
    for(var j = 0;i < values.length;j++){
      valuesmap[j] = iter(values[j])
    }
    for(var key in arraymap){
      var flag = true
      for(var target in valuesmap){
        if(arraymap[key] == valuesmap[target]){
          flag = false
        }
      }
      if(flag == true){
        result.push(array[key])  
      }
    }
    return result
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
  fromPairs:function(paris){
    var result = {}
    for(var i = 0;i < paris.length;i++){
      result[paris[i][0]] = paris[i][1]
    }
    return result
  },
  toPairs:function(paris){
    var result = []
    for(keys in paris){
      if(paris.hasOwnProperty(keys))
      result.push([keys,paris[keys]])
    }
    return result
  },
  head:function(array){
    return array[0]
  },
  indexOf:function(array,target,fromindex = 0){
    for(var i = fromindex; i < array.length;i++){
      if(array[i] == target){
        return i
      }
    }
    return -1
  },
  initial:function(array){
    return array.slice(0,array.length-1)
  },
  intersection:function(...array){
    //(...ary).reduce(function(pre,cur){})
    if(arguments.length == 1){
      return arguments[0]
    }else{
      var result = []
      for(var j = 0;j < arguments[0].length;j++){
        var flag = false
        for(var i = 1;i < arguments.length;i++){
          for(var val of arguments[i]){
            if(val === arguments[0][j]){
              flag = true
              break
            }else{
              flag = false
            }
          }
          if(flag == false){
            break
          }
        }
        if(flag == true){
          result.push(arguments[0][j])
        }
      }
      return result
    }
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
      if(Array.isArray(array[i])){
        for (var j = 0; j < array[i].length;j++){
          newarray.push(array[i][j])
        }
      }else{
        newarray.push(array[i])
      }
    } 
    return newarray
  },
  flattenDeep:function(array){
    var result = []
    for(var i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        var tmp = tinyd0409.flattenDeep(array[i])
        result = [...result,...tmp]
      }else {
        result.push(array[i])
      }  
    }
    return result
  },
  flattenDepth: function (array,n){
    var result = []
    if(n == 0){
      return [...array]
    }
    for(var i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        var tmp = tinyd0409.flattenDepth(array[i],n-1)
        result = [...result,...tmp]
      }else {
        result.push(array[i])
      }  
    }
    return result
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
  lastIndexOf:function(array,value,fromindex = array.length-1){
    for(var i = fromindex ; i>=0 ; i--){
      if(array[i] === value){
        return i
      }
    }
    return -1
  },
  nth:function (array,index = 0){
    //递归一下 负数的特别大的话
    let l = array.length
    return array[(index+l)%l]
  },
  pull:function (array,...args){
    let a = [] 
    for(let j = 1; j < arguments.length;j++){
      a.push(arguments[j])
    }
    return array.filter(item => {
      for(let i = 0;i < a.length;i++){
        if(item == a[i]){
          return false
        }
      }
      return true
    })
  },
  pullAll:function (array,values){
    return array.filter(item => {
      for(let i = 0;i < values.length;i++){
        if(item == values[i]){
          return false
        }
      }
      return true
    })
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
  findIndex:function(array,wanttofind,fromindex = 0){
    var t = wanttofind
    if(Array.isArray(wanttofind)){
      wanttofind = tinyd0409.matchesProperty(t)
    }else if(typeof wanttofind == "object"){
      wanttofind = tinyd0409.matches(t)
    }else if(wanttofind == undefined){
      wanttofind = tinyd0409.identity(t)
    }else if(typeof wanttofind == "string"){
      wanttofind = tinyd0409.property(t)
    } else {
      wanttofind = wanttofind
    }
    for(var i = fromindex; i < array.length; i++){
      if(wanttofind(array[i])){
        return i
        break
      }
    }
    return -1
  },
  remove:function(array,f){
    var result = array
    tinyd0409.pullAll(array,result.filter(f))   
    return result.filter(f)
  },
  reverse:function(array){
    return array.reverse()
    /*
    let l = array.length
    for(var i = 0;i <= l/2;i++){
      var tmp = array[i]
      array[i] = array[l-1-i]
      array[l-1-i] = tmp
    }
    return array*/
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
  //调用时候相当于 fc = negate(f)
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
    //return tinyd0409.sumBy(array,item=>item)
  },
  sumBy:function(ary,iter){
    //array就是数组，这个数组里面可能是对象，可能是数值
    var result = 0
    for (var i = 0;i < ary.length;i++){
      result+=iter(ary[i])
    }
    return result 
  },

// 要判断的两个对象
// 乱序的对象也要判断出来
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
        othermap.push(atr)
      }
      if(valuemap.length === othermap.length){
        for(var i = 0;i < valuemap.length; i++){
          if(tinyd0409.isEqual(value[valuemap[i]],other[valuemap[i]])){
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
  property:function(propName){
    return function(obj){
        return obj[propName]
    }
  },
  /*get:function(name,obj){
    return obj[name]
  },
  function property (){
    return get.bind(null,name)
  }*/
  identity:function (value){
    return value
  },
  matches : function(obj){
    return function(obj2){
      for (var key in obj){
        if(obj[key] !== obj2[key]){
          return false
        }
      }
      return true
    }
  },
  /*
    function matches(src){
      isMatches.bind(null,obj) obj是不是在src里
      return function(obj){
        
      }
    },
   */
  matchesProperty:function (ary){
    return function(obj){
      for(var i = 0;i < ary.length;i+=2){
        var key = ary[i]
        var val = ary[i+1]
        if(obj[key] !== val){
          return false
        }
      }
      return true
    }
  },

  //function.length = 参数个数
  ary :function (func,n = func.length){
    //最多给原函数传n个函数
    return function(...args){
      return func(...args.slice(0,n))
    }
  },
  unary:function(f){
    return function(value){
      return f(value)
    }
  },
  uniq:function (ary){
    return Array.from(new Set(ary)) 
  },
  /*uniqBy:function (ary,iteratee=this.identity){
    for (let i = 0;i i < ary.length;i++){
      iteratee(ary[i])
    }
  },*/
  //返回一个函数 这个函数和func功能一样，但接收数组参数
  spread: function (func){
    return function (ary){
      return func.apply(null,...ary.slice(start))
    }
  },
  flip: function (func){
    return function (...args){
      return func(...args.reverse())
    }
  },
  //可以用 for of 
  assign:function(object,...exist){
    for(var i = 1;i < arguments.length;i++){
      for( var key in arguments[i]){
        if(arguments[i].hasOwnProperty(key)){
          object[key] = arguments[i][key]
        }
      }
    }
    return object
  },

  isPrimitive:function(val){
    var type = typeof val
    if(val === null){
      return true
    }
    switch(type){
      case 'number':
      case 'string':
      case 'boolean':
      case 'undefined':
        return true
    }
    return false
  },
  merge:function(target,...objs){
    //应该也考虑数组对象
    for(var obj of objs){
      for(var key in obj){
        if(this.isPrimitive(obj[key])){
          target[key] = obj[key]
        }else{
          if(key in target){
            target[key] = this.merge(target[key],obj[key])
          } else {
            target[key] = this.merge({},obj[key])
          }
        }
      } 
    }
    return target
  },
  cloneDeep : function(obj){
    //lodash里都考虑了带环对象
    var result = {}
    for(var key in obj){
      if(typeof obj[key] === 'object') {
        result[key] = cloneDeep(obj[key])
      }else {
        result[key] = obj[key]
      }
    }
    return result 
  },
  forOwn:function(object,iteratee = this.identity){
  //var hasOwn = Object.prototype.hasOwnProperty 这样写可以节省if判断的时间
  //var hasOwn = Function.call.bind(Object.prototype.hasOwnProperty,object)
    for(var key in object){
      //要考虑object如果有一个自有属性就叫hasOwnProperty的情况
      if(Object.prototype.hasOwnProperty.call(object,key)){
        iteratee(object[key],key,object)
      }
    }
    return object  
  },
  forOwnRight:function(){
  //倒序遍历 递归 数组可以 对象不可以
    var keys = Object.keys(object).reverse()
    var hasOwn = Object.prototype.hasOwnProperty
    for(var key of keys){ //for of可以遍历数组的每一个值 性能差 lodash是朴素的for循环
      //要考虑object如果有一个自有属性就叫hasOwnProperty的情况
      if(hasOwn.call(object,key)){
        iteratee(object[key],key,object)
      }
    }
    /*for(var j = 0; j < keys.length; j++){
      if(hasOwn(object[keys[j]])){
        iteratee(object[keys[j]],key,object)
      }
    }*/
    return object  
  },
  functions:function (obj){
     var result = []
    if(Array.isArray(obj)){
      for (var i = 0;i < obj.length;i++){
        result.push(i)
      }
    } else {
      for(key in obj){
        if (object.hasOwnProperty(key)){
          result.push(key) 
        }
      }
    }
    return result
  },
  functionsIn:function (obj){
    var result = []
    if(Array.isArray(obj)){
      for (var i = 0;i < obj.length;i++){
        result.push(i)
      }
    }else{
      for(key in obj){
          result.push(key) 
      }
    }
    return result
  },
  get:function (object, path, def = "default"){
    if(typeof path == "string"){
      var pm = []
      var tmps = []
      for(var i = 0;i < path.length; i++){
        var w = path[i]
        if(w == "["){
          if(tmps.length !== 0){
            pm.push(tmps.join("")) 
          }
          tmps = []
        }else if (w == "]"){
          pm.push(tmps.join(""))
          tmps = []
        }else if(w == "."){
          if(tmps.length !== 0){
            pm.push(tmps.join(""))
          }
          tmps = []
        }else{
          tmps.push(w)
        }
      }
      if(tmps.length !== 0){
        pm.push(tmps.join(""))
      }
    }else{
      var pm = path
    }
    var tmpo = object
    for(var j = 0;j < pm.length; j++){
      tmpo = tmpo[pm[j]]
      if(tmpo){
      }else{
        return def
      }
    }
    return tmpo
  },
  has : function (object, path){
    if(typeof path == "string"){
      var pm = []
      var tmps = []
      for(var i = 0;i < path.length; i++){
        var w = path[i]
        if(w == "["){
          if(tmps.length !== 0){
            pm.push(tmps.join("")) 
          }
          tmps = []
        }else if (w == "]"){
          pm.push(tmps.join(""))
          tmps = []
        }else if(w == "."){
          if(tmps.length !== 0){
            pm.push(tmps.join(""))
          }
          tmps = []
        }else{
          tmps.push(w)
        }
      }
      if(tmps.length !== 0){
        pm.push(tmps.join(""))
      }
    }else{
      var pm = path
    }
    var tmpo = object
    for(var j = 0;j < pm.length; j++){
      tmpo = tmpo[pm[j]]
      if(tmpo){
      }else{
        return false
      }
    }
    return true
  },
  keys:function(object){
    var result = []
    if(Array.isArray(object)){
      for (var i = 0;i < object.length;i++){
        result.push(i)
      }
    }else{
      for(key in object){
        if (object.hasOwnProperty(key)){
          result.push(key) 
        }
      }
    }
    return result 
  },
  entries:function(){

  },
  values:function(obj){
    var result = []
    if(Array.isArray(obj)){
      for (var i = 0;i < obj.length; i++){
        result.push(obj[i])
      }
    } else {
      for(key in obj){
        if(obj.hasOwnProperty(key)){
          result.push(obj[key]) 
        }
      }
    }
    return result 
  },
  curry : function (){},
  after:function(n,func){
    var count = 0
    return function(...args){
      count++
      if(count >= n){
        return func(...args)
      }
    }
  },
}
