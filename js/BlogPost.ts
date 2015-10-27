/// <reference path='_all.ts' />

module blogposts {
  'use strict';

  export class BlogPost {
    constructor(
      public postPosition: number,
      public title: string,
      public body: string
    ) { }
  }

}
