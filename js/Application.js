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
/// <reference path='../../libs/underscore/underscore.d.ts' />
/// <reference path='BlogPost.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var BlogPostStore = (function () {
        function BlogPostStore() {
            this.posts = [
                new blogposts.BlogPost(1, "First Post", "This is the body"),
                new blogposts.BlogPost(2, "Second Post", "This is the body"),
                new blogposts.BlogPost(3, "Third Post", "This is the body"),
                new blogposts.BlogPost(4, "Fourth Post", "This is the body")
            ];
        }
        BlogPostStore.prototype.add = function (newPost) {
            this.posts.push(newPost);
        };
        BlogPostStore.prototype.remove = function (at) {
            //Todo
            throw "Not implemented yet.";
        };
        BlogPostStore.prototype.list = function () {
            return this.posts;
        };
        BlogPostStore.prototype.nextId = function () {
            return this.posts.length;
        };
        return BlogPostStore;
    })();
    blogposts.BlogPostStore = BlogPostStore;
})(blogposts || (blogposts = {}));
/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />
/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../blogpost/BlogPostStore.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var ViewBlogPostCtrl = (function () {
        function ViewBlogPostCtrl(blogPostStore, $scope, $location) {
            this.blogPostStore = blogPostStore;
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
        ViewBlogPostCtrl.prototype.list = function () {
            return this.blogPostStore.list();
        };
        ViewBlogPostCtrl.prototype.getPosts = function (from, to) {
            throw "Not implemented yet";
        };
        ViewBlogPostCtrl.prototype.deletePost = function (at) {
        };
        ViewBlogPostCtrl.$inject = [
            'blogPostStore',
            '$scope',
            '$location'
        ];
        return ViewBlogPostCtrl;
    })();
    blogposts.ViewBlogPostCtrl = ViewBlogPostCtrl;
})(blogposts || (blogposts = {}));
/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />
/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../blogpost/BlogPostStore.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var CreateBlogPostCtrl = (function () {
        function CreateBlogPostCtrl(blogPostStore, $scope, $location) {
            this.blogPostStore = blogPostStore;
            this.$scope = $scope;
            this.$location = $location;
            $scope.vm = this;
            $scope.newPostTitle = "";
            $scope.newPostBody = "";
        }
        CreateBlogPostCtrl.prototype.addPost = function () {
            console.log("Trying to add");
            var newPost = new blogposts.BlogPost(this.blogPostStore.nextId(), this.$scope.newPostTitle, this.$scope.newPostBody);
            this.blogPostStore.add(newPost);
            this.$scope.newPostTitle = "";
            this.$scope.newPostBody = "";
        };
        CreateBlogPostCtrl.prototype.editPost = function (post) {
            throw "Not implemented yet";
        };
        CreateBlogPostCtrl.$inject = [
            'blogPostStore',
            '$scope',
            '$location'
        ];
        return CreateBlogPostCtrl;
    })();
    blogposts.CreateBlogPostCtrl = CreateBlogPostCtrl;
})(blogposts || (blogposts = {}));
/// <reference path='../libs/jquery/jquery.d.ts' />
/// <reference path='../libs/angular/angular.d.ts' />
/// <reference path='../libs/angular/angular-route.d.ts' />
/// <reference path='viewblogposts/ViewBlogPostCtrl.ts' />
/// <reference path='createblogpost/CreateBlogPostCtrl.ts' />
/// <reference path='blogpost/BlogPostStore.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var golby = angular.module('golby', ['ngRoute'])
        .controller('viewBlogPostCtrl', blogposts.ViewBlogPostCtrl)
        .controller('createBlogPostCtrl', blogposts.CreateBlogPostCtrl)
        .service('blogPostStore', blogposts.BlogPostStore)
        .config(['$routeProvider',
        function routes($routeProvider) {
            $routeProvider
                .when('/', {
                templateUrl: 'views/viewPosts.html',
                controller: 'viewBlogPostCtrl'
            })
                .when('/newPost', {
                templateUrl: 'views/newPost.html',
                controller: 'createBlogPostCtrl'
            })
                .otherwise({
                redirectTo: '/'
            });
        }
    ]);
})(blogposts || (blogposts = {}));
//# sourceMappingURL=Application.js.map