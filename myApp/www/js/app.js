// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


  .factory('EmployeeService', function () {
    
    //var pets = [];

    var employees = [
            {"id": 1, "empid": "AC001", "firstName": "MAt", "lastName": "C", "department": "Executive", "cellPhone": "999-999-9999", "officePhone": "111-111-1111", "email": "mc@gmail.com ", "wechatid": "Mat", "skypeid": "matSkypeid", "pic": "1.jpg"},
            {"id": 2, "empid": "AC002", "firstName": "Tony", "lastName": "Xu", "department": "Marketing & Sales", "cellPhone": "999-999-9999", "officePhone": "222-222-2222", "email": "TTsai@gmail.com", "wechatid": "9097206668", "skypeid": "TonySkypeid", "pic": "2.jpg"},
            {"id": 3, "empid": "AC003", "firstName": "Teresa", "lastName": "Liu", "department": "Accounting ", "cellPhone": "999-999-9999", "officePhone": "333-333-3333", "email": "Ted@gmail.com", "wechatid": "Ted", "skypeid": "TedSkypeid", "pic": "3.jpg"},
            {"id": 4, "empid": "AC004", "firstName": "Richard", "lastName": "Fbfj", "department": "R & D", "cellPhone": "999-999-9999", "officePhone": "204", "email": "nxks@gmail.com", "wechatid": "RSheng456", "skypeid": "RichardSkypeid", "pic": "4.jpg"},
            {"id": 5, "empid": "AC005", "firstName": "Jason", "lastName": "G", "department": "Product Management ", "cellPhone": "999-999-9999", "officePhone": "205", "email": "hjxhs@gmail.com", "wechatid": "AdccApp", "skypeid": "jasonSkypeid", "pic": "5.jpg"},
            {"id": 6, "empid": "AC006", "firstName": "Jonathan", "lastName": "K", "department": "Marketing & Sales", "cellPhone": "999-999-9999", "officePhone": "207", "email": "Jjxb@gmail.com", "wechatid": "Jlong@cdnjnbjnkj.com", "skypeid": "sjjjbdjbj", "pic": "6.jpg"},
            {"id": 7, "empid": "AC007", "firstName": "Leon", "lastName": "Chen", "department": "Visualization Team ", "cellPhone": "999-999-9999", "officePhone": "208", "email": "LChen@gmail.com", "wechatid": "leonchen899", "skypeid": "skjkskjklans", "pic": "7.jpg"},
            {"id": 8, "empid": "AC008", "firstName": "Bikram", "lastName": "K", "department": "Infomation & Technology ", "cellPhone": "999-999-9999", "officePhone": "209", "email": "BKhandan@gmail.com", "wechatid": "ksjxkjsxs", "skypeid": "BSkypeid", "pic": "8.jpg"},
            {"id": 9, "empid": "AC009", "firstName": "Hena", "lastName": "Huang", "department": "Accounting", "cellPhone": "999-999-9999", "officePhone": "206", "email": "skxnk@gmail.com ", "wechatid": "gracehhc", "skypeid": "GSkypeid", "pic": "9.jpg"},
            {"id": 10, "empid": "AC009", "firstName": "Angel", "lastName": "M", "department": "Accounting", "cellPhone": "999-999-9999", "officePhone": "206", "email": "nskhk@gmail.com ", "wechatid": "gracehhc", "skypeid": "GSkypeid", "pic": "10.jpg"},       
            {"id": 11, "empid": "AC017", "firstName": "John", "lastName": "Johnny", "department": "Infomation & Technology", "cellPhone": "999-999-9999", "officePhone": "218", "email": "knskj@gmail.com", "wechatid": "john", "skypeid": "johncSkypeid", "pic": "11.jpg"},
            {"id": 12, "empid": "AC030", "firstName": "Namrata", "lastName": "Mehta", "department": "Infomation & Technology", "cellPhone": "999-999-9999", "officePhone": "123", "email": "jslj@gmail.com", "wechatid": "namrata", "skypeid": "namrataSkypeid", "pic": "12.jpg"},
            {"id": 13, "empid": "AC033", "firstName": "Rahul", "lastName": "Qnc", "department": "Infomation & Technology ", "cellPhone": "999-999-9999", "officePhone": "123", "email": "xjsj@gmail.com", "wechatid": " ", "skypeid": "rahulSkypeid", "pic": "13.jpg"},
            {"id": 14, "empid": "AC034", "firstName": "Tina", "lastName": "Asd", "department": "Infomation & Technology ", "cellPhone": "999-999-9999", "officePhone": "123", "email": "skk@gmail.com", "wechatid": " ", "skypeid": "tkjxsjj", "pic": "14.jpg"},
            {"id": 15, "empid": "AC035", "firstName": "Ricardo", "lastName": "X", "department": "Infomation & Technology ", "cellPhone": "999-999-9999", "officePhone": "123", "email": "ksjwo@gmail.com", "wechatid": " ", "skypeid": "bjjsdbkab", "pic": "15.jpg"},
            {"id": 16, "empid": "AC038", "firstName": "Amit", "lastName": "A", "department": "Infomation & Technology ", "cellPhone": "999-999-9999", "officePhone": "209", "email": "amit@gmail.com", "wechatid": " ", "skypeid": " ", "pic": "16.jpg"},       
        ];


    
    
    return {
      all: function () {
       
        return employees;
      },
      get: function (employeeId) {
         console.log("Inside get function"+employees[employeeId-1]);
        return employees[employeeId-1];
      }
    };

  })


  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('intro', {
        url: '/',
        templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      })

    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      .state('tabs.home', {
        url: "/main",
        views: {
          'home-tab': {
            templateUrl: "templates/home.html",
            controller: 'MainCtrl'
          }
        }
      })


      .state('tabs.about', {
        url: "/about",
        views: {
          'about-tab': {
            templateUrl: "templates/about.html"
          }
        }
      })
      .state('tabs.navstack', {
        url: "/navstack",
        views: {
          'about-tab': {
            templateUrl: "templates/nav-stack.html"
          }
        }
      })

      .state('tabs.contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        views: {
          'contact-tab': {
            templateUrl: "templates/contact.html",
            controller: 'MasterCtrl'
          }
        }
      })
      
     .state('tabs.employeecontact', {
    url: "/employeecontact/:employeeId",
    views: {
      'contact-tab': {
        controller:'ContactDetailCtrl',
        templateUrl: "templates/employeecontact.html"
      }
    }
  });

    $urlRouterProvider.otherwise("/main");

  })

  .controller('IntroCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {

    // Called to navigate to the main app
    $scope.startApp = function () {
      $state.go('main');
    };
    $scope.next = function () {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function () {
      $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {
      $scope.slideIndex = index;
    };
  })

  .controller('MainCtrl', function ($scope, $state) {
    console.log('MainCtrl');

    $scope.toIntro = function () {
      $state.go('intro');
    }
  })


  .controller('ConCtrl', function ($scope, $state) {
    console.log('MyCtrl');

    $scope.search = function () {
      console.log('search clicked' + $scope.searchKey);

    }
  })
   
  .controller('MasterCtrl', function($scope, EmployeeService, $ionicScrollDelegate, $ionicHistory) {

    console.log('MasterCtrl');

  $scope.$on('$ionicView.afterLeave', function(){
    $ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.beforeEnter', function(){
    //$ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.beforeLeave', function(){
    $ionicHistory.clearCache();
  });
  $scope.$on('$ionicView.afterEnter', function(){
    $ionicHistory.clearCache();
  });

  $scope.employees = EmployeeService.all();

  $scope.scrollBottom = function() {
    $ionicScrollDelegate.scrollBottom(true);
  };
 
})

.controller('ContactDetailCtrl', function($scope, $stateParams, EmployeeService) {
   console.log('ContactDetailCtrl'+$stateParams.employeeId);
  $scope.employee = EmployeeService.get($stateParams.employeeId);

});


