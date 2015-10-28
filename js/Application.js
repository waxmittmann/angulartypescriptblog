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
/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var ViewBlogPostCtrl = (function () {
        function ViewBlogPostCtrl($scope, $location) {
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
        ViewBlogPostCtrl.prototype.addPost = function () {
        };
        ViewBlogPostCtrl.prototype.getPosts = function (from, to) {
        };
        ViewBlogPostCtrl.prototype.test = function () {
            var sum = _.reduce([1, 2, 3], function (memo, num) { return memo + num; }, 0);
            console.log(sum);
        };
        ViewBlogPostCtrl.$inject = [
            '$scope',
            '$location'
        ];
        return ViewBlogPostCtrl;
    })();
    blogposts.ViewBlogPostCtrl = ViewBlogPostCtrl;
})(blogposts || (blogposts = {}));
/// <reference path='../libs/jquery/jquery.d.ts' />
/// <reference path='../libs/angular/angular.d.ts' />
/// <reference path='../libs/angular/angular-route.d.ts' />
/// <reference path='viewblogposts/ViewBlogPostCtrl.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var golby = angular.module('golby', ['ngRoute'])
        .controller('viewBlogPostCtrl', blogposts.ViewBlogPostCtrl)
        .config(['$routeProvider',
        function routes($routeProvider) {
            $routeProvider
                .when('/', {
                templateUrl: 'views/view1.html',
                controller: 'viewBlogPostCtrl'
            })
                .when('/cheese', {
                templateUrl: 'views/view2.html',
                controller: 'viewBlogPostCtrl'
            })
                .otherwise({
                redirectTo: '/'
            });
        }
    ]);
})(blogposts || (blogposts = {}));
//# sourceMappingURL=Application.js.map