/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/angular/angular-route.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />

/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../blogpost/LocalStorageBlogPostStore.ts' />

module blogposts {
  'use strict';

  export class CreateBlogPostCtrl {

    public static $inject = [
      'blogPostStore',
			'$scope',
			'$location',
      '$routeParams'
		];

    constructor(
      private blogPostStore: LocalStorageBlogPostStore,
      private $scope,
      private $location: ng.ILocationService,
      private $routeParams
    ) {
      $scope.vm = this;

      if ($routeParams.postId) {
        $scope.newPostId = $routeParams.postId;
        var postToEdit = blogPostStore.get($scope.newPostId);
        if (!postToEdit) {
            throw "Post with id " + $scope.newPostId + " not found";
        }
        $scope.newPostTitle = postToEdit.title;
        $scope.newPostBody = postToEdit.body;
      } else {
        $scope.newPostTitle = "";
        $scope.newPostBody = "";
      }
    }

    addOrEditPost() {
      if (this.$scope.newPostId) {
          var newPost = new BlogPost(
              this.$scope.newPostId,
              this.$scope.newPostTitle,
              this.$scope.newPostBody
          );
          this.blogPostStore.edit(newPost);
      } else {
          var newPost = new BlogPost(
              this.blogPostStore.nextId(),
              this.$scope.newPostTitle,
              this.$scope.newPostBody
          );
          this.blogPostStore.add(newPost);
          this.$scope.newPostId = newPost.id;
      }
    }

    save() {
      this.addOrEditPost();
    }

    cancel() {
      this.$location.path("/");
    }

    done() {
      this.addOrEditPost();
      this.$location.path("/");
    }

    // editPost(post: BlogPost) {
    //   throw "Not implemented yet";
    // }
  }
}
