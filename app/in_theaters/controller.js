(function(angular){
'use strict';
 var data =[
    {
      "rating": {
        "max": 10,
        "average": 5.5,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画",
        "冒险"
      ],
      "title": "鲁滨逊漂流记",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1032127/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/1429.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/1429.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/1429.jpg"
          },
          "name": "马提亚斯·施维赫夫",
          "id": "1032127"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1163569/",
          "avatars": {
            "small": "http://img6.douban.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img6.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img6.douban.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "卡亚·叶娜尔",
          "id": "1163569"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1252784/",
          "avatars": {
            "small": "http://img6.douban.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img6.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img6.douban.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "伊尔卡·贝桑",
          "id": "1252784"
        }
      ],
      "collect_count": 1370,
      "original_title": "Robinson Crusoe",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1354415/",
          "avatars": {
            "small": "http://img6.douban.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img6.douban.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img6.douban.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "文森特·凯斯特鲁特",
          "id": "1354415"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1298282/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/57270.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/57270.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/57270.jpg"
          },
          "name": "本·斯塔森",
          "id": "1298282"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img6.douban.com/view/movie_poster_cover/ipst/public/p2384412081.jpg",
        "large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2384412081.jpg",
        "medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2384412081.jpg"
      },
      "alt": "https://movie.douban.com/subject/26721478/",
      "id": "26721478"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.7,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画"
      ],
      "title": "逗鸟外传：萌宝满天飞",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1025187/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/48146.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/48146.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/48146.jpg"
          },
          "name": "安迪·萨姆伯格",
          "id": "1025187"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1360587/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/1472976828.3.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/1472976828.3.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/1472976828.3.jpg"
          },
          "name": "凯蒂·克朗",
          "id": "1360587"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1031847/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/1396501988.66.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/1396501988.66.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/1396501988.66.jpg"
          },
          "name": "凯尔希·格兰莫",
          "id": "1031847"
        }
      ],
      "collect_count": 8031,
      "original_title": "Storks",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1031179/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/19194.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/19194.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/19194.jpg"
          },
          "name": "尼古拉斯·斯托勒",
          "id": "1031179"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1298729/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/1370511874.76.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/1370511874.76.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/1370511874.76.jpg"
          },
          "name": "道格·斯威特兰德",
          "id": "1298729"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img6.douban.com/view/movie_poster_cover/ipst/public/p2378515005.jpg",
        "large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2378515005.jpg",
        "medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2378515005.jpg"
      },
      "alt": "https://movie.douban.com/subject/26374205/",
      "id": "26374205"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.7,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "剧情",
        "爱情"
      ],
      "title": "七月与安生",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1274224/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/36798.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/36798.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/36798.jpg"
          },
          "name": "周冬雨",
          "id": "1274224"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275243/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/1417875699.12.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/1417875699.12.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/1417875699.12.jpg"
          },
          "name": "马思纯",
          "id": "1275243"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1349387/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/1431402028.37.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/1431402028.37.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/1431402028.37.jpg"
          },
          "name": "李程彬",
          "id": "1349387"
        }
      ],
      "collect_count": 68791,
      "original_title": "七月与安生",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1274534/",
          "avatars": {
            "small": "http://img6.douban.com/img/celebrity/small/10707.jpg",
            "large": "http://img6.douban.com/img/celebrity/large/10707.jpg",
            "medium": "http://img6.douban.com/img/celebrity/medium/10707.jpg"
          },
          "name": "曾国祥",
          "id": "1274534"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img6.douban.com/view/movie_poster_cover/ipst/public/p2378140502.jpg",
        "large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2378140502.jpg",
        "medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2378140502.jpg"
      },
      "alt": "https://movie.douban.com/subject/25827935/",
      "id": "25827935"
    }
  ];
//创建模块
var module  = angular.module('moviecat.in_theaters',
	['ngRoute',
	'moviecat.services.http']);
//配置模块的路由
module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/in_theaters/:page', {
    templateUrl: 'in_theaters/view.html',
    controller: 'InTheatersController'
  });
}])

module.controller('InTheatersController', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpService',
	function($scope,$route,$routeParams,HttpService) {
		var count = 10;  //每一页条数
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
			'https://api.douban.com/v2/movie/in_theaters',
			{start:start, count:count},
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

