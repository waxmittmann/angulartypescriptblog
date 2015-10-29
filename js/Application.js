var blogposts;
(function (blogposts) {
    'use strict';
    var BlogPost = (function () {
        function BlogPost(id, title, body) {
            this.id = id;
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
    var LocalStorageBlogPostStore = (function () {
        function LocalStorageBlogPostStore() {
        }
        LocalStorageBlogPostStore.prototype.add = function (newPost) {
            this.doWithPosts(function (posts) {
                posts.push(newPost);
            });
        };
        LocalStorageBlogPostStore.prototype.edit = function (editedPost) {
            this.doWithPosts(function (posts) {
                var index = _.findIndex(posts, function (post) { return post.id == editedPost.id; });
                if (index != -1) {
                    posts[index] = editedPost;
                }
                else {
                    throw "No post with id " + editedPost.id;
                }
            });
        };
        LocalStorageBlogPostStore.prototype.get = function (id) {
            var post = this.doWithPosts(function (posts) {
                var index = _.findIndex(posts, function (post) {
                    return post.id == id;
                });
                console.log("Found " + index);
                return posts[index];
            });
            return post;
        };
        LocalStorageBlogPostStore.prototype.remove = function (id) {
            var posts = this.list();
            var newPosts = _.filter(posts, function (post) { return post.id != id; });
            var difference = posts.length - newPosts.length;
            localStorage.setItem(LocalStorageBlogPostStore.STORAGE_ID, JSON.stringify(newPosts));
            console.log("Stored " + newPosts);
            return difference;
        };
        LocalStorageBlogPostStore.prototype.list = function () {
            var result = JSON.parse(localStorage.getItem(LocalStorageBlogPostStore.STORAGE_ID));
            if (!result) {
                result = new Array();
            }
            console.log("Received " + result);
            return result;
        };
        LocalStorageBlogPostStore.prototype.nextId = function () {
            var difference = this.doWithPosts(function (posts) {
                return posts.length + 1;
            });
            return difference;
        };
        LocalStorageBlogPostStore.prototype.doWithPosts = function (func) {
            var posts = this.list();
            var result = func(posts);
            localStorage.setItem(LocalStorageBlogPostStore.STORAGE_ID, JSON.stringify(posts));
            return result;
        };
        LocalStorageBlogPostStore.STORAGE_ID = "blog-post-store";
        return LocalStorageBlogPostStore;
    })();
    blogposts.LocalStorageBlogPostStore = LocalStorageBlogPostStore;
})(blogposts || (blogposts = {}));
/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/angular/angular-route.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />
/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../blogpost/LocalStorageBlogPostStore.ts' />
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
        ViewBlogPostCtrl.prototype.deletePost = function (id) {
            this.blogPostStore.remove(id);
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
/// <reference path='../../libs/angular/angular-route.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />
/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../blogpost/LocalStorageBlogPostStore.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var CreateBlogPostCtrl = (function () {
        function CreateBlogPostCtrl(blogPostStore, $scope, $location, $routeParams) {
            this.blogPostStore = blogPostStore;
            this.$scope = $scope;
            this.$location = $location;
            this.$routeParams = $routeParams;
            $scope.vm = this;
            if ($routeParams.postId) {
                $scope.newPostId = $routeParams.postId;
                var postToEdit = blogPostStore.get($scope.newPostId);
                if (!postToEdit) {
                    throw "Post with id " + $scope.newPostId + " not found";
                }
                $scope.newPostTitle = postToEdit.title;
                $scope.newPostBody = postToEdit.body;
            }
            else {
                $scope.newPostTitle = "";
                $scope.newPostBody = "";
            }
        }
        CreateBlogPostCtrl.prototype.addOrEditPost = function () {
            if (this.$scope.newPostId) {
                var newPost = new blogposts.BlogPost(this.$scope.newPostId, this.$scope.newPostTitle, this.$scope.newPostBody);
                this.blogPostStore.edit(newPost);
            }
            else {
                var newPost = new blogposts.BlogPost(this.blogPostStore.nextId(), this.$scope.newPostTitle, this.$scope.newPostBody);
                this.blogPostStore.add(newPost);
                this.$scope.newPostId = newPost.id;
            }
        };
        CreateBlogPostCtrl.prototype.save = function () {
            this.addOrEditPost();
        };
        CreateBlogPostCtrl.prototype.cancel = function () {
            this.$location.path("/");
        };
        CreateBlogPostCtrl.prototype.done = function () {
            this.addOrEditPost();
            this.$location.path("/");
        };
        CreateBlogPostCtrl.$inject = [
            'blogPostStore',
            '$scope',
            '$location',
            '$routeParams'
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
/// <reference path='blogpost/LocalStorageBlogPostStore.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var golby = angular.module('golby', ['ngRoute'])
        .controller('viewBlogPostCtrl', blogposts.ViewBlogPostCtrl)
        .controller('createBlogPostCtrl', blogposts.CreateBlogPostCtrl)
        .service('blogPostStore', blogposts.LocalStorageBlogPostStore)
        .config(['$routeProvider',
        function routes($routeProvider) {
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
})(blogposts || (blogposts = {}));
//# sourceMappingURL=Application.js.map