'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_detail',
  'moviecat.movie_list',
  'moviecat.directives.auto_focus',
]).
constant('AppConfig', {//为模块定义一些常量
	pageSize:10,
	listApiAddress:'https://api.douban.com/v2/movie/',
	detailApiAddress:'https://api.douban.com/v2/movie/subject/'
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).
controller('NavController', [
'$scope',
'$location',
 function($scope,$location){
 	//console.log($location);
 	$scope.location = $location;
 	$scope.$watch('location.path()', function(now, old){
 		switch(now){
 			case '/in_theaters/1' :
 				$scope.type = 'in_theaters';
 				break;
 			case '/coming_soon/1' :
 				$scope.type = 'coming_soon';
 				break;
 			default:
 				$scope.type = 'top250';
 				break;
 		}
 	});
}])
.controller('SearchController', [
	'$scope',
	'$route',
	function($scope,$route){
	$scope.input = '';
	$scope.search = function(){
		$route.updateParams({category: 'search', q:$scope.input});
	};
}]);
