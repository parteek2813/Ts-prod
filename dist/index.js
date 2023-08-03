"use strict";
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Gohana";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Gohana";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count must be greater than 1");
        }
        this._courseCount = courseNum;
    }
}
const Parteek = new User("p@p.com", "Parteek");
// for making the property as private .... we can use the private keyword or the #[hash] between them.....
// the # comes from js world and private comes from ts world
/**
 * Getters and setters
 * Get is used to get the property .... which can be private property or a
 * public property
 *
 * setter is used to set the property but we can't return anything from the
 * setter in the ts world and does not write return type in ts in setters
 *
 */
