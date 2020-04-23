import * as Phaser from "phaser";

export default class BootloaderScene extends Phaser.Scene {

    // properties
    // ----------------------

    // constructor
    // ----------------------


    constructor() {
        super({
            key: "BootloaderScene"
        })
    }

    // methods
    // ----------------------

    /**
     * Load all assets of the game
     */
    preload() {

        // load sprites
        this.load.image("monkey","assets/img/monkey.png");
        this.load.image("migue","assets/img/migue.png");
        this.load.image("parcel","assets/img/parcel.png");
        this.load.image("ts","assets/img/ts.png");
        this.load.spritesheet("chango","assets/img/chango.png", {
            frameWidth: 24,
            frameHeight: 32
        });

        // load everything
        this.load.on('complete', () => {
            this.scene.start('MainScene');
        });

    }


}