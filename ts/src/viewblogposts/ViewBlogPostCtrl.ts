/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />

/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../blogpost/BlogPostStore.ts' />

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

    constructor(
      private blogPostStore: BlogPostStore,
      private $scope,
      private $location: ng.ILocationService
    ) {
      $scope.vm = this;
    }

    list() {
      return this.blogPostStore.list();
    }

    getPosts(from: number, to: number) {
      throw "Not implemented yet";
    }

    deletePost(at: number) {

    }
  }
}
