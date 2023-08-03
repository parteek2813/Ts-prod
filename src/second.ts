interface TakePhoto {
  cameraMode: string;
  filter: string;
  burstMode: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("Story is created");
  }
}
export {};

/**
 * Interface are something which are implemented to maintain consisteny.
 *
 * the classes which implements interfaces should use all of the methods or functions
 * defined in the interface. We can have more methods or functions in the derived class
 * but not the less.
 *
 * The function defined in the interface must be implemented in the class
 * implementing that interface.
 *
 */
