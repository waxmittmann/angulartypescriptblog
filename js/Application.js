/// <reference path='_all.ts' />
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
/// <reference path='_all.ts' />
/// <reference path='BlogPost.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/underscore/underscore.d.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    // import _ = require("underscore");
    // import $ = require("jQuery");
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
            var sum = _.reduce([1, 2, 3], function (memo, num) { return memo + num; }, 0);
            // var sum = _.reduce([1, 2, 3], function(memo: number, num: number){ return memo + num; }, 0);
            console.log(sum);
        };
        BlogPostCtrl.prototype.getPosts = function (from, to) {
        };
        BlogPostCtrl.$inject = [
            '$scope',
            '$location'
        ];
        return BlogPostCtrl;
    })();
    blogposts.BlogPostCtrl = BlogPostCtrl;
})(blogposts || (blogposts = {}));
/// <reference path='_all.ts' />
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='BlogPostCtrl.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var golby = angular.module('golby', [])
        .controller('blogPostCtrl', blogposts.BlogPostCtrl);
})(blogposts || (blogposts = {}));
//# sourceMappingURL=Application.js.map