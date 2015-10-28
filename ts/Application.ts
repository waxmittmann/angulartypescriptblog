/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='BlogPostCtrl.ts' />
/// <reference path='Router.ts' />
/// <reference path="libs/angular/angular-route.d.ts" />

module blogposts {
    'use strict';

    // var modules = ['app.controllers','app.directives', 'app.filters', 'app.services'];
    // modules.forEach((module) => angular.module(module, []));

    // *** Push ngRoute or $routeProvider won't work ***
    // modules.push("ngRoute");

    // angular.module('app', modules);

    var golby = angular.module('golby', ['ngRoute'])
    // var golby = angular.module('golby', ['angular-route'])
            .controller('blogPostCtrl', BlogPostCtrl)
            .config(['$routeProvider',
                // *** $routeProvider is typed with ng.route.IRouteProvider ***
                function routes($routeProvider: ng.route.IRouteProvider) {
                    $routeProvider
                        .when('/', {
                            templateUrl: 'views/view1.html',
                            controller: 'blogPostCtrl'
                        })
                        .when('/cheese', {
                            templateUrl: 'views/view2.html',
                            controller: 'blogPostCtrl'
                        })
                        .otherwise({
                            redirectTo: '/'
                        });
                }
            ]);
}
