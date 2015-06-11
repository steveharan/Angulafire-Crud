(function () {
    "use strict";

    var app = angular.module('user', ['ngRoute',
                'firebase',
                'ui.router',
                'ui.bootstrap']);

    app.value('fbURL', 'https://angularjscrudmodal.firebaseio.com/');
    app.value('user_table', 'user');
    app.value('country_table', 'country');
    app.value('state_table', 'state');

    app.factory('Users', function ($firebase, fbURL, user_table) {
        return $firebase(new Firebase(fbURL + user_table));
    });
    app.factory('Country', function ($firebase, fbURL, country_table) {
        return $firebase(new Firebase(fbURL + country_table));
    });
    app.factory('State', function ($firebase, fbURL, state_table) {
        return $firebase(new Firebase(fbURL + state_table));
    });

    app.config([
            "$stateProvider",
            "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                    .state("list", {
                        url: "/",
                        templateUrl: "app/views/listview.html",
                        controller: "ListCtrl"
                    });
                $urlRouterProvider.otherwise("/");
            }]
    );

}());


//        $routeProvider
//            .when('/', {
//                controller: 'ListCtrl',
//                templateUrl: 'app/views/listview.html'
//            })
//            .otherwise({
//                redirectTo: '/'
//            });