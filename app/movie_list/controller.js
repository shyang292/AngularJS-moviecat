(function(angular){
'use strict';
//创建模块
var module  = angular.module('moviecat.movie_list',
	['ngRoute',
	'moviecat.services.http']);
//配置模块的路由
module.config(['$routeProvider', function($routeProvider) {
	console.log("movie_list");
  $routeProvider.when('/:category/:page', {
    templateUrl: 'movie_list/view.html',
    controller: 'MovieListController'
  });
}])

module.controller('MovieListController', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpService',
	'AppConfig',
	function($scope,$route,$routeParams,HttpService,AppConfig) {
		//console.log(AppConfig);
		var count = AppConfig.pageSize;  //每一页条数
		var page = parseInt($routeParams.page);//当前页号
		var start = (page -1) *count;    //当前页从哪里开始

		//控制器分为两步：
		//1. 设计暴露的数据 2. 设计暴露的行为
		//$scope.subjects = data;
		$scope.currentPage = page;
		$scope.subjects = [];
		$scope.message = '';
		$scope.title = '';
		$scope.totalCount = 0;
		$scope.totalPages = 0;
		$scope.loading = true;
		HttpService.jsonp(
			AppConfig.listApiAddress+$routeParams.category,
			{start:start, count:count, q : $routeParams.q},
			function(data){
				$scope.title = data.title;
				$scope.subjects = data.subjects;
				$scope.totalCount = data.total;
				//$apply作用就是让指定的表达式重新同步
				$scope.totalPages = Math.ceil($scope.totalCount/count);
				$scope.loading = false;
				$scope.$apply();
				//console.log(data);
		  });

		//测试$http服务
		//在angular中使用jsonp的方式做跨域请求
		//必须给当前地址加上一个参数callback=JSON_CALLBACK
/*		$http.jsonp(doubanApiAddress+'?callback=JSON_CALLBACK').
			then(function(res){
				//此处代码是在异步请求完成后才执行
				//console.log(res);
				if(res.status==200){
					$scope.subjects = res.data.subjects;
				}else{
					$scope.message = '获取数据错误11';
				}
		}, function(err){
				$scope.message = '获取数据错误22';
		});*/
		//暴露一个上一页下一页的行为
		$scope.go = function(page){
			//传过来第几页，调到第几页
			//做一个合法范围校验
			if(page>=1 && page<=$scope.totalPages)
				$route.updateParams({page:page});
		};

}]);
})(angular)

