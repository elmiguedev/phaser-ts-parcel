import * as Phaser from "phaser";

export default class Monkey extends Phaser.Physics.Arcade.Sprite {

        // properties
        // --------------------

        private stepSize:number = 2;

        // constructor
        // --------------------
        
        constructor(scene:Phaser.Scene, x:number, y:number) {
            super(scene, x, y, "monkey");
            scene.physics.world.enable(this);
            scene.add.existing(this);

        }
        
        // methods
        // --------------------

        private calculateStepSize() : number {
            return this.stepSize + 2;
        }

        public moveLeft() {
            this.x -= this.calculateStepSize();
        }
        
        public moveRight() {
            this.x += this.calculateStepSize();
        }


    } 
