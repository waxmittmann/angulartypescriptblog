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
      private blogPostStore,
      private $scope,
      private $location: ng.ILocationService
    ) {
      $scope.vm = this;
    }

    addPost() {

    }
  }
}
