/// <reference path='BlogPost.ts' />

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

// module todos {
// 	export interface ITodoStorage {
// 		get (): TodoItem[];
// 		put(todos: TodoItem[]);
// 	}
// }
