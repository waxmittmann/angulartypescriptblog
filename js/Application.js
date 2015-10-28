var blogposts;
(function (blogposts) {
    'use strict';
    var BlogPost = (function () {
        function BlogPost(postPosition, title, body) {
            this.postPosition = postPosition;
            this.title = title;
            this.body = body;
        }
        return BlogPost;
    })();
    blogposts.BlogPost = BlogPost;
})(blogposts || (blogposts = {}));
/// <reference path='BlogPost.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/underscore/underscore.d.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var BlogPostCtrl = (function () {
        function BlogPostCtrl($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            this.posts = [
                new blogposts.BlogPost(1, "First Post", "This is the body"),
                new blogposts.BlogPost(2, "Second Post", "This is the body"),
                new blogposts.BlogPost(3, "Third Post", "This is the body"),
                new blogposts.BlogPost(4, "Fourth Post", "This is the body")
            ];
            $scope.vm = this;
        }
        BlogPostCtrl.prototype.addPost = function () {
        };
        BlogPostCtrl.prototype.getPosts = function (from, to) {
        };
        BlogPostCtrl.prototype.test = function () {
            var sum = _.reduce([1, 2, 3], function (memo, num) { return memo + num; }, 0);
            console.log(sum);
        };
        BlogPostCtrl.$inject = [
            '$scope',
            '$location'
        ];
        return BlogPostCtrl;
    })();
    blogposts.BlogPostCtrl = BlogPostCtrl;
})(blogposts || (blogposts = {}));
/// <reference path="libs/angular/angular.d.ts" />
/// <reference path="libs/angular/angular-route.d.ts" />
'use strict';
// Create and register modules
// var modules = ['app.controllers','app.directives', 'app.filters', 'app.services'];
// modules.forEach((module) => angular.module(module, []));
// *** Push ngRoute or $routeProvider won't work ***
// modules.push("ngRoute");
// angular.module('app', modules);
// Url routing
// angular.module('golby').config(['$routeProvider',
//     function routes($routeProvider: ng.route.IRouteProvider) { // *** $routeProvider is typed with ng.route.IRouteProvider ***
//         $routeProvider
//             .when('/', {
//                 templateUrl: 'views/MyView.html',
//                 controller: 'golby.controllers.BlogPostCtrl'
//             })
//             .when('/cheese', {
//                 templateUrl: 'views/Cheese.html',
//                 controller: 'golby.controllers.BlogPostCtrl'
//             })
//             .otherwise({
//                 redirectTo: '/'
//             });
//     }
// ]);
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='BlogPostCtrl.ts' />
/// <reference path='Router.ts' />
/// <reference path="libs/angular/angular-route.d.ts" />
var blogposts;
(function (blogposts) {
    'use strict';
    // var modules = ['app.controllers','app.directives', 'app.filters', 'app.services'];
    // modules.forEach((module) => angular.module(module, []));
    // *** Push ngRoute or $routeProvider won't work ***
    // modules.push("ngRoute");
    // angular.module('app', modules);
    var golby = angular.module('golby', ['ngRoute'])
        .controller('blogPostCtrl', blogposts.BlogPostCtrl)
        .config(['$routeProvider',
        // *** $routeProvider is typed with ng.route.IRouteProvider ***
        // *** $routeProvider is typed with ng.route.IRouteProvider ***
        function routes($routeProvider) {
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
})(blogposts || (blogposts = {}));
//# sourceMappingURL=Application.js.map