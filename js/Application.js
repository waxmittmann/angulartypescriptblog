/// <reference path='_all.ts' />
var blogposts;
(function (blogposts) {
    'use strict';
    var BlogPost = (function () {
        function BlogPost(title, body) {
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
var blogposts;
(function (blogposts) {
    'use strict';
    var BlogPostCtrl = (function () {
        function BlogPostCtrl($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            this.posts = [
                new blogposts.BlogPost("First Post", "This is the body"),
                new blogposts.BlogPost("Second Post", "This is the body"),
                new blogposts.BlogPost("Third Post", "This is the body"),
                new blogposts.BlogPost("Fourth Post", "This is the body")
            ];
            $scope.vm = this;
        }
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