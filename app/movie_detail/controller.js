(function(angular){
'use strict';

//创建模块
var module  = angular.module(
	'moviecat.movie_detail',
	['ngRoute',
	'moviecat.services.http']);
//配置模块的路由
module.config(['$routeProvider', function($routeProvider) {
	//console.log('movie_detail');
  $routeProvider.when('/detail/:id', {
    templateUrl: 'movie_detail/view.html',
    controller: 'MovieDetailController'
  });
}])

module.controller('MovieDetailController', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpService',
	'AppConfig',
	function($scope,$route,$routeParams,HttpService,AppConfig) {
		$scope.movie = {};
		$scope.loading = true;
		var id = $routeParams.id;
		var apiAddress = AppConfig.detailApiAddress+id;
		//console.log(apiAddress);
	  HttpService.jsonp(apiAddress,{},function(data){
	  	$scope.movie = data;
	  	$scope.loading = false;
	  	//console.log($scope.movie);
	  	$scope.$apply();//异步请求后，重新请求绑定
	  });
}]);
})(angular);

