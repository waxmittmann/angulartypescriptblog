/// <reference path='../_all.ts' />

module blogposts {
  'use strict';

  export class ViewBlogPostCtrl {
    public static $inject = [
      'blogPostStore',
      'authenticationService',
			'$scope',
			'$location',
      '$routeParams'
		];

    //The reason for this is because the storage will return a new array each time
    //so we will trigger an endless digest cycle =(
    //Maybe we should take blogPosts out of the digest cycle and manually trigger
    //updates?
    private blogPosts: BlogPost[];
    private selectedPostId;
    
    constructor(
      private blogPostStore: BlogPostStore,
      private authenticationService: AuthenticationService,
      private $scope,
      private $location: ng.ILocationService,
      private $routeParams
    ) {
      $scope.vm = this;
      this.blogPosts = this.blogPostStore.list();
      this.selectedPostId = $routeParams.postId;

      console.log("Called constructor!");
    }

    list(): BlogPost[] {
      return this.blogPosts;
    }

    getPosts(from: number, to: number) {
      throw "Not implemented yet";
    }

    getSelectedPost(): BlogPost {
      if (!this.selectedPostId) {
        throw "No post was selected...";
      }
      return this.blogPostStore.get(this.selectedPostId);
    }

    deletePost(id: number) {
      this.blogPostStore.remove(id);
      this.blogPosts = this.blogPostStore.list();
    }
  }
}
