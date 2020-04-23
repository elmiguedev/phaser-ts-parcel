import * as Phaser from "phaser";

export default class MainScene extends Phaser.Scene {

    // properties
    // ----------------------

    // constructor
    // ----------------------


    constructor() {
        super({
            key: "MainScene"
        })
    }

    // methods
    // ----------------------

    init() {
        this.add.image(100, 100, "monkey");
    }

}