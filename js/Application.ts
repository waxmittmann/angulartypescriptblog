/// <reference path='_all.ts' />
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='BlogPostCtrl.ts' />

module blogposts {
    'use strict';

    var golby = angular.module('golby', [])
            .controller('blogPostCtrl', BlogPostCtrl);
}
