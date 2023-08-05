abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calculations
    return 8;
  }
}

// abstract class is something , in which use them directly but
// can be used by another class extending that class

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const parteek = new Instagram("test", "test", 10);

parteek.getReelTime;

export {};
