/// <reference path='../libs/jquery/jquery.d.ts' />
/// <reference path='../libs/angular/angular.d.ts' />
/// <reference path='../libs/angular/angular-route.d.ts' />

/// <reference path='viewblogposts/ViewBlogPostCtrl.ts' />
/// <reference path='createblogpost/CreateBlogPostCtrl.ts' />
/// <reference path='blogpost/LocalStorageBlogPostStore.ts' />

module blogposts {
    'use strict';

    //maybe should use ui-router instead of ngRoute
    var golby = angular.module('golby', ['ngRoute'])
            .controller('viewBlogPostCtrl', ViewBlogPostCtrl)
            .controller('createBlogPostCtrl', CreateBlogPostCtrl)
            .service('blogPostStore', LocalStorageBlogPostStore)
            .config(['$routeProvider',
                function routes($routeProvider: ng.route.IRouteProvider) {
                    $routeProvider
                        .when('/', {
                            templateUrl: 'views/viewPosts.html',
                            controller: 'viewBlogPostCtrl'
                        })
                        .when('/admin/posts/:postId', {
                            templateUrl: 'views/newPost.html',
                            controller: 'createBlogPostCtrl'
                        })
                        .when('/admin/posts/', {
                            templateUrl: 'views/newPost.html',
                            controller: 'createBlogPostCtrl'
                        })
                        .when('/404', {
                            templateUrl: 'views/404.html'
                        })
                        .otherwise({
                            redirectTo: '/404'
                        });
                }
            ]);
}
