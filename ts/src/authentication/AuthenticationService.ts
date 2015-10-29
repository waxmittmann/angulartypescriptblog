/// <reference path='../_all.ts' />

module blogposts {
  'use strict';

  export class AuthenticationService {

    private loggedIn: boolean = false;

    login(password: string) {
      this.loggedIn = true;
    }

    logout() {
      this.loggedIn = false;
    }

    isLoggedIn() {
      return this.loggedIn;
    }
  }
}
