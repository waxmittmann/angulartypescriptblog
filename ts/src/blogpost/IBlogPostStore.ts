/// <reference path='BlogPost.ts' />

module blogposts {
	export interface IBlogPostStore {
    add(post: BlogPost);
    list(): BlogPost[];
    remove(at: number);
	}
}
