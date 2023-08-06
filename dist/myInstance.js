// function logValue(x) {
//     if (x instanceof Date) {
//         console.log(x.toUTCString());
//     }
//     else {
//         console.log(x.toUpperCase());
//     }
// }
// function isFish(pet) {
//     return pet.swim !== undefined;
// }

// because of the type predicates pet is Fish , we are sure theat
// the isFish(pet) returns us the pet only
// and if we hover over the pet, we can see the pet: Fish Only!

// function getFood(pet) {
//   if (isFish(pet)) {
//     pet; // it should only be fish here but ts still confused
//     return "Fish Food";
//   } else {
//     pet;
//     return "bird Food";
//   }
// }

function animalSound(animal) {
  if (animal.kind === "cat") {
    console.log("".concat(animal.name, " says meow"));
    animal.meow();
  } else if (animal.kind === "dog") {
    console.log("".concat(animal.name, " says bark!"));
    animal.bark();
  } else {
    // here ts sure that animal is never
    animal;
    console.log("Unknown animal!");
  }
}
var cat = {
  kind: "cat",
  name: "whiskers",
  meow: function () {
    return console.log("Meow!");
  },
};
var dog = {
  kind: "dog",
  name: "Buddy",
  bark: function () {
    return console.log("Woof!");
  },
};
animalSound(cat);
animalSound(dog);
