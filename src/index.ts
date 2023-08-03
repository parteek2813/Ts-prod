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
  protected _courseCount = 1;

  private readonly city: string = "Gohana";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token deleted");
  }
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return 5 + this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count must be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

const Parteek = new User("p@p.com", "Parteek");

class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

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
