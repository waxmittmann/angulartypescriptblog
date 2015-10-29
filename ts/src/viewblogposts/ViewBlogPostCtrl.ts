/// <reference path='../_all.ts' />

module blogposts {
  'use strict';

  export class ViewBlogPostCtrl {
    public static $inject = [
      'blogPostStore',
      'authenticationService',
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
      private authenticationService: AuthenticationService,
      private $scope,
      private $location: ng.ILocationService
    ) {
      $scope.vm = this;
      this.blogPosts = this.blogPostStore.list();

      console.log("Called constructor!");
    }

    list(): BlogPost[] {
      return this.blogPosts;
    }

    getPosts(from: number, to: number) {
      throw "Not implemented yet";
    }

    deletePost(id: number) {
      this.blogPostStore.remove(id);
      this.blogPosts = this.blogPostStore.list();
    }

    // showAdminControls(): boolean {
    //   console.log("is logged in? = " + this.authenticationService.isLoggedIn());
    //   return this.authenticationService.isLoggedIn();
    // }
  }
}
