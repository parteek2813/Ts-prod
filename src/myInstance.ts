function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// because of the type predicates pet is Fish , we are sure theat
// the isFish(pet) returns us the pet only
// and if we hover over the pet, we can see the pet: Fish Only!

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; // it should only be fish here but ts still confused
    return "Fish Food";
  } else {
    pet;
    return "bird Food";
  }
}

// EXAMPLE AGAIN

interface Cat {
  kind: "cat";
  name: string;
  meow: () => void;
}

interface Dog {
  kind: "dog";
  name: string;
  bark: () => void;
}

type Animal = Cat | Dog;

function animalSound(animal: Animal): void {
  if (animal.kind === "cat") {
    console.log(`${animal.name} says meow`);
    animal.meow();
  } else if (animal.kind === "dog") {
    console.log(`${animal.name} says bark!`);
    animal.bark();
  } else {
    // here ts sure that animal is never
    animal;
    console.log("Unknown animal!");
  }
}

const cat: Cat = {
  kind: "cat",
  name: "whiskers",
  meow: () => console.log("Meow!"),
};

const dog: Dog = {
  kind: "dog",
  name: "Buddy",
  bark: () => console.log("Woof!"),
};

animalSound(cat);
animalSound(dog);
