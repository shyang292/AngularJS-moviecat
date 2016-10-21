(function(angular){
	//由于默认angular提供的异步请求对象不支持自定义回调函数名称
	//angular随机分配的回调函数名称不被豆瓣支持
	var http = angular.module('moviecat.services.http', []);
	http.service('HttpService', ['$window','$document', function($window,$document){
       //console.log($document);
       this.jsonp = function(url, data, callback){
 		  // 1. 处理url中的回调参数
 		  // 2. 创建一个script标签
 		  // 3. 挂在回调函数
 		  // 4. 将script标签放到页面中
 		  var queryString = '?';
 		  for(var key in data){
 		  	queryString+=key+"="+data[key]+'&';
 		  }
 		  var cbFunc = 'mycallback';
 		  //$window[cbFunc] = callback;
 		  queryString+='callback='+cbFunc;
 		  //console.log($document);
 		  var scriptElement = $document[0].createElement('script');
 		  scriptElement.src = url+queryString;
 		  $window[cbFunc] = function(data){
 		  	callback(data);
 		  	$document[0].body.removeChild(scriptElement);
 		  }
 		  $document[0].body.appendChild(scriptElement);
       };
	}]);
})(angular)
