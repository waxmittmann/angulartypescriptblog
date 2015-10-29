/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/angular/angular-route.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />

/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../blogpost/BlogPostStore.ts' />

module blogposts {
  'use strict';

  export class ViewBlogPostCtrl {
    public static $inject = [
      'blogPostStore',
			'$scope',
			'$location'
		];

    //The reason for this is because the storage will return a new array each time
    //so we will trigger an endless digest cycle =(
    //Maybe we should take blogPosts out of the digest cycle and manually trigger
    //updates?
    private blogPosts: BlogPost[];

    constructor(
      private blogPostStore: BlogPostStore,
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
    }
  }
}
