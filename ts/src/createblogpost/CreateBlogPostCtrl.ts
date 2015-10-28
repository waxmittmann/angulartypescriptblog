/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />

/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../blogpost/BlogPostStore.ts' />

module blogposts {
  'use strict';

  export class CreateBlogPostCtrl {

    public static $inject = [
      'blogPostStore',
			'$scope',
			'$location'
		];

    constructor(
      private blogPostStore: BlogPostStore,
      private $scope,
      private $location: ng.ILocationService
    ) {
      $scope.vm = this;
      $scope.newPostTitle = "";
      $scope.newPostBody = "";
    }

    addPost() {
      console.log("Trying to add");
      var newPost = new BlogPost(
          this.blogPostStore.nextId(),
          this.$scope.newPostTitle,
          this.$scope.newPostBody
      );
      this.blogPostStore.add(newPost);
      this.$scope.newPostTitle = "";
      this.$scope.newPostBody = "";
    }

    editPost(post: BlogPost) {
      throw "Not implemented yet";
    }
  }
}
