"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
class Youtube {
    constructor(cameraMode, filter, burstMode, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.short = short;
    }
    createStory() {
        console.log("Story is created");
    }
}
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
