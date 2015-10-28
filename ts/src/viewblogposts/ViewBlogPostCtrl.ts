/// <reference path='../blogpost/BlogPost.ts' />
/// <reference path='../../libs/angular/angular.d.ts' />
/// <reference path='../../libs/jquery/jquery.d.ts' />
/// <reference path='../../libs/underscore/underscore.d.ts' />

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
			'$scope',
			'$location'
		];

    constructor(
      private $scope,
      private $location: ng.ILocationService
    ) {
      $scope.vm = this;
    }

    addPost() {

    }

    getPosts(from: number, to: number) {

    }

    test() {
      var sum = _.reduce([1, 2, 3], function(memo: number, num: number){ return memo + num; }, 0);
      console.log(sum)
    }
  }
}
