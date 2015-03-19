// Generated by CoffeeScript 1.9.1
var Controller;

Controller = function(router, location) {
  router.config([
    {
      path: "/news",
      component: "news"
    }, {
      path: "/data",
      component: "data"
    }, {
      path: "/request",
      component: "request"
    }, {
      path: '/',
      redirectTo: '/news'
    }
  ]);
  location.path('/news');
};

Controller.$inject = ['$router', '$location'];

angular.module('app').controller('profileCtrl', Controller);