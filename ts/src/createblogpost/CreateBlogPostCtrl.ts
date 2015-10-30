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

        constructor(private blogPostStore:BlogPostStore,
                    private authenticationService,
                    private $scope,
                    private $location:ng.ILocationService,
                    private $routeParams) {
            $scope.vm = this;

            if (!authenticationService.isLoggedIn()) {
                this.$location.path("/login");
            }

            if ($routeParams.postId) {
                $scope.newPostId = $routeParams.postId;
                blogPostStore.get($scope.newPostId).then(
                    function(blogPost) {
                        var postToEdit : BlogPostData = blogPost;
                        if (!postToEdit) {
                            throw "Post with id " + $scope.newPostId + " not found";
                        }
                        $scope.postEditing = postToEdit;
                    },
                    function(error) {
                        console.log("Failed to load post");
                    }
                );
                //$scope.newPostTitle = postToEdit.title;
                //$scope.newPostBody = postToEdit.body;
            } else {
                $scope.postEditing = new BlogPostData("", "");
                //$scope.newPostTitle = "";
                //$scope.newPostBody = "";
            }
        }

        addOrEditPost(): ng.IPromise<BlogPost> {
            if (this.$scope.postEditing.id) {
                return this.blogPostStore.edit(this.$scope.postEditing);
                //var newPost = new BlogPost(
                //    this.$scope.newPostId,
                //    this.$scope.newPostTitle,
                //    this.$scope.newPostBody
                //);
                //this.blogPostStore.edit(newPost);
            } else {
                return this.blogPostStore.add(this.$scope.postEditing);

                //var newPost = new BlogPost(
                //    -1, //We don't have a valid id yet, server needs to assign it
                //    this.$scope.newPostTitle,
                //    this.$scope.newPostBody
                //);
                //this.blogPostStore.add({
                //    'title': this.$scope.newPostTitle,
                //    'body': this.$scope.newPostBody
                //});
                //this.$scope.newPostId = newPost.id;
            }
        }

        save() {
            this.addOrEditPost().then(
                function() {
                    console.log("Saved successfully");
                },
                function() {
                    console.log("Failed to save");
                }
            );
        }

        cancel() {
            this.$location.path("/");
        }

        done() {
            this.addOrEditPost().then(
                function() {
                    console.log("Saved successfully");
                    this.$location.path("/");
                },
                function() {
                    console.log("Failed to save");
                }
            );
        }
    }
}
