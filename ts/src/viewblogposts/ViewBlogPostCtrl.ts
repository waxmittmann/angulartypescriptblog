/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/angular/angular-route.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />

/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../blogpost/LocalStorageBlogPostStore.ts' />

module blogposts {
  'use strict';

  export class ViewBlogPostCtrl {
    private posts = [
        new BlogPost(1, "First Post", "This is the body"),
        new BlogPost(2, "Second Post", "This is the body"),
        new BlogPost(3, "Third Post", "This is the body"),
        new BlogPost(4, "Fourth Post", "This is the body")
    ];

    public static $inject = [
      'blogPostStore',
			'$scope',
			'$location'
		];

    private blogPosts: BlogPost[];

    constructor(
      private blogPostStore: LocalStorageBlogPostStore,
      private $scope,
      private $location: ng.ILocationService
    ) {
      $scope.vm = this;
      this.blogPosts = this.blogPostStore.list();
    }

    list() {
      return this.blogPosts;
    }

    getPosts(from: number, to: number) {
      throw "Not implemented yet";
    }

    deletePost(id: number) {
      this.blogPostStore.remove(id);
      this.blogPosts = this.blogPostStore.list();
      // this.$scope.$digest();
    }
  }
}
