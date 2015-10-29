/// <reference path='../../libs/underscore/underscore.d.ts' />

/// <reference path='BlogPostStore.ts' />
/// <reference path='BlogPost.ts' />

module blogposts {
  'use strict';

  export class LocalStorageBlogPostStore implements BlogPostStore {
    private static STORAGE_ID = "blog-post-store"

    add(newPost: BlogPost) {
      this.doWithPosts(function(posts: BlogPost[]) {
          posts.push(newPost);
      });
    }

    edit(editedPost: BlogPost) {
      this.doWithPosts(function(posts: BlogPost[]) {
          var index = _.findIndex(posts,
            function(post) {return post.id == editedPost.id});
          if (index != -1) {
              posts[index] = editedPost;
          } else {
              throw "No post with id " + editedPost.id;
          }
      });
    }

    get(id: number) {
      var post = this.doWithPosts(function(posts: BlogPost[]) {
          var index = _.findIndex(posts,
              function(post) {
                return post.id == id;
              });
          console.log("Found " + index);
          return posts[index];
      });
      return post;
    }

    remove(id: number) {
      var posts: BlogPost[] = this.list();
      var newPosts = _.filter(posts, function(post) { return post.id != id});
      var difference = posts.length - newPosts.length;
      localStorage.setItem(LocalStorageBlogPostStore.STORAGE_ID, JSON.stringify(newPosts));
      console.log("Stored " + newPosts);
      return difference;
    }

    list(): BlogPost[] {
      var result = JSON.parse(localStorage.getItem(LocalStorageBlogPostStore.STORAGE_ID));
      if (!result) {
          result = new Array<BlogPost>();
      }
      console.log("Received " + result);
      return result;
    }

    nextId() {
      var difference = this.doWithPosts(function(posts) {
          var largestId: number =_.chain(posts)
              .map(function(post) { return Number(post.id); })
              .reduce(function(largestSoFar: number, cur: number) {
                console.log("Comparing " + largestSoFar + " and " + cur);
                return largestSoFar > cur ? largestSoFar : cur;
              }, 1)
              .value();
          var newId: number = largestId + 1;
          console.log(largestId + ", " + newId);
          return newId;
      });
      return difference;
    }

    doWithPosts(func) {
      var posts: BlogPost[] = this.list();
      var result = func(posts);
      localStorage.setItem(LocalStorageBlogPostStore.STORAGE_ID, JSON.stringify(posts));
      return result;
    }
  }
}
