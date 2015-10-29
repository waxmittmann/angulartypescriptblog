/// <reference path='../_all.ts' />


module blogposts {
  'use strict';

  export class CreateBlogPostCtrl {

    public static $inject = [
      'blogPostStore',
      'authenticationService',
			'$scope',
			'$location',
      '$routeParams'
		];

    constructor(
      private blogPostStore: BlogPostStore,
      private authenticationService,
      private $scope,
      private $location: ng.ILocationService,
      private $routeParams
    ) {
      $scope.vm = this;

      if (!authenticationService.isLoggedIn()) {
        this.$location.path("/login");
      }

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
  }
}
