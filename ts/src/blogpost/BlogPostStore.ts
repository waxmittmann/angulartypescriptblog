/// <reference path='../_all.ts' />


module blogposts {
  'use strict';

  export interface BlogPostStore {
    add(newPost: BlogPost);

    edit(editedPost: BlogPost);

    get(id: number): BlogPost;

    remove(id: number): number;

    list(): BlogPost[];

    nextId(): number;
  }
}
