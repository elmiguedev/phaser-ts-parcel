import * as Phaser from "phaser";
import Monkey from "../entities/monkey.entity";

export default class MainScene extends Phaser.Scene {

    // properties
    // ----------------------

    private monkey: Monkey;
    private keys: {
        left: Phaser.Input.Keyboard.Key,
        right: Phaser.Input.Keyboard.Key,
        up: Phaser.Input.Keyboard.Key
    }

    private textos: Array<Array<string>> = [
        ["A Jugar con Phaser 🚀",
            "3.0",
            "",
            "",
            "by Migue",
            "🐵"],
        [
            "Cómo preparar nuestro proyecto",
            "y entorno de trabajo",
            "para programar juegos en JS!!",
            "💪"
        ],
        [
            ""
            "MIGUE MOYANO",
            "",
            "",
            "",
            "",
            "",
            "",
            "🐦 @elmiguedev",
            "📷 @elmiguedev",
            "👾 @IndieGameGarage"
        ],
        [
            "💻 Desarrollador de software",
            "👮 Policía de Córdoba",
            "🎮 GameDev tiempos libres",
            "🎸 Músico (o intento)",
            "👥 CoDeAr: Encuentros, WebConf"

        ],
        [
            "¿Qué es esto de",
            "Parcel",
            "y",
            "Typescript?",
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "PARCEL"
        ],
        [
            "Empaquetador ultra-rápido",
            "",
            "✔️ Liviano",
            "✔️ Muy facil de usar",
            "✔️ ZERO CONF!!!",
            "✔️ Rápido 🐇",
            "✔️ TS incluido por defecto",
            "(babel tmb 🙄)",
        ],
        [


            "",
            "",
            "",
            "",
            "",

            "TypeScript"
        ],
        [
            "Typed superset of JavaScript",
            "",
            "✔️ POO",
            "✔️ Fuertemente tipado",
            "✔️ Herencia y Polimorfismo",
            "✔️ Visibilidad de propiedades", 
            "y metodos 👀",
        ],
        [
            "LET THE ROCK OFF BEGIN",
            "🚀 - 🤘 - 🚀"
        ]
    ]
    private txt: Phaser.GameObjects.Text;

    private chango: Phaser.Physics.Arcade.Sprite;
    private room: number = 0;
    private logo: any;

    // constructor
    // ----------------------


    constructor() {
        super({
            key: "MainScene"
        })
    }

    // methods
    // ----------------------

    crearTeclas() {
        this.keys = {
            left: this.input.keyboard.addKey("LEFT"),
            right: this.input.keyboard.addKey("RIGHT"),
            up: this.input.keyboard.addKey("UP"),
        }
    }

    crearChango() {
        this.chango = this.physics.add.sprite(100, 150, "chango");
        this.anims.create({
            key: "chango_idle",
            repeat: -1,
            frameRate: 5,
            frames: this.anims.generateFrameNumbers(
                "chango",
                (
                    { frames: [0, 1, 2] }
                )
            )
        });
        this.anims.create({
            key: "chango_walk",
            repeat: -1,
            frameRate: 10,
            frames: this.anims.generateFrameNumbers(
                "chango",
                (
                    { frames: [0, 3, 4, 3] }
                )
            )
        });
        this.chango.setGravityY(400);
        this.chango.setCollideWorldBounds(true);
        this.chango.setMaxVelocity(100, 100);
        this.chango.anims.play("chango_idle", true);
    }

    mostrarTexto() {
        this.txt.setText(this.textos[this.room]).setOrigin(0.5).setAlign("center");
    }

    init() {
        this.cameras.main.setBackgroundColor('#1a237e')
        this.txt = this.add.text(this.game.canvas.width / 2, 80, "");
        this.mostrarTexto();
        this.crearTeclas();
        this.crearChango();
        this.logo = this.add.sprite(-100, -100, "monkey");

    }

    update() {
        if (this.keys.left.isDown) {
            this.chango.x -= 2;
            this.chango.anims.play("chango_walk", true);
        } else if (this.keys.right.isDown) {
            this.chango.x += 2;
            this.chango.anims.play("chango_walk", true);
        } else {
            this.chango.anims.play("chango_idle", true);

        }

        if (this.keys.up.isDown) {
            this.chango.setVelocityY(-100);
        }

        this.checkTransition();
        this.checkLogo();
    }

    checkLogo() {
        if (this.room == 2) {
            if (!this.logo.visible) {
                this.logo = this.add.sprite(this.game.canvas.width / 2, 70, "migue").setScale(0.3).setVisible(true);
            }
        } else if (this.room == 5) {
            if (!this.logo.visible) {
                this.logo = this.add.sprite(this.game.canvas.width / 2, 60, "parcel").setScale(0.1).setVisible(true);
            }
        } else if (this.room == 7) {
            if (!this.logo.visible) {
                this.logo = this.add.sprite(this.game.canvas.width / 2, 60, "ts").setScale(0.1).setVisible(true);
            }
        }
        else {
            this.logo.setVisible(false);
        }
    }

    checkTransition() {
        if (this.chango.x > 280 && this.room < 10) {
            this.chango.x = 40;
            this.room++;
            this.logo.setVisible(false);
            this.mostrarTexto();

        }
        if (this.chango.x < 40 && this.room > 0) {
            this.chango.x = 280;
            this.room--;
            this.logo.setVisible(false);
            this.mostrarTexto();

        }
    }



}