import { AUTO, Game, Scale } from "phaser";
import { GameScene } from "./game-scene";

const CONFIG = {
	type: AUTO,
	scene: GameScene,
    pixelArt: true,
    width: window.innerWidth,
    height: window.innerHeight,
	scale: {
		mode: Scale.RESIZE,
		autoCenter: Scale.CENTER_BOTH,
    },
    backgroundColor: '#e0e0e0'
};

new Game(CONFIG);