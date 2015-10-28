/// <reference path='../libs/jquery/jquery.d.ts' />
/// <reference path='../libs/angular/angular.d.ts' />
/// <reference path='../libs/angular/angular-route.d.ts' />

/// <reference path='viewblogposts/ViewBlogPostCtrl.ts' />
/// <reference path='blogpost/BlogPostStore.ts' />

module blogposts {
    'use strict';

    var golby = angular.module('golby', ['ngRoute'])
            .controller('viewBlogPostCtrl', ViewBlogPostCtrl)
            .service('blogPostStore', BlogPostStore)
            .config(['$routeProvider',
                function routes($routeProvider: ng.route.IRouteProvider) {
                    $routeProvider
                        .when('/', {
                            templateUrl: 'views/viewPosts.html',
                            controller: 'viewBlogPostCtrl'
                        })
                        .when('/newPost', {
                            templateUrl: 'views/newPost.html',
                            controller: 'viewBlogPostCtrl'
                        })
                        .otherwise({
                            redirectTo: '/'
                        });
                }
            ]);
}
