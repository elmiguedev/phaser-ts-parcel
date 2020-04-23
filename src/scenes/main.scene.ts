import * as Phaser from "phaser";
import Monkey from "../entities/monkey.entity";

export default class MainScene extends Phaser.Scene {

    // properties
    // ----------------------

    private monkey:Monkey;
    private keys: {
        left: Phaser.Input.Keyboard.Key,
        right: Phaser.Input.Keyboard.Key
    }

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
        this.monkey = new Monkey(this, 100, 100);
        this.keys = {
            left: this.input.keyboard.addKey("LEFT"),
            right: this.input.keyboard.addKey("RIGHT"),
        }
    }

    update() {
        if (this.keys.left.isDown) {
            this.monkey.moveLeft();
        }
        if (this.keys.right.isDown) {
            this.monkey.moveRight();
        }
    }

}