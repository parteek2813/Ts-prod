class User {
  email: string;
  name: string;
  readonly city: string = "Gohana";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const Parteek = new User("p@p.com", "Parteek");
// Parteek.city = "Gohana";
