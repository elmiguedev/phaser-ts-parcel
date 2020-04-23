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
        this.load.image("monkey", "../assets/img/monkey.png");

        // load everything
        this.load.on('complete', () => {
            this.scene.start('MainScene');
        });

    }


}