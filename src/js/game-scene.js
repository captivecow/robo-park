import { Scene } from "phaser";

export class GameScene extends Scene {

    BASE_WIDTH = 256;
    BASE_HEIGHT = 144;
    FIXED_TIMESTEP = 1000 / 60;
    MAX_DELTA = 25.0;
    lag = 0.0;
    accumulator = 0.0;
    alpha = 0.0


	constructor() {
		super("GameScene");
	}

	preload() {
        this.load.image('player', 'src/assets/player.png');
    }

	create() {
        let sprite = this.add.sprite(0, 0, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();
        sprite.setDisplayOrigin(0, 0);
        sprite.setDisplaySize(16, 24);
        this.cameras.main.startFollow(sprite);
        this.scale.on("resize", this.resize, this);
        this.scale.refresh();
	}

	update(_time, delta) {
        this.accumulator += Math.min(delta, this.MAX_DELTA);

        while(this.accumulator >= this.FIXED_TIMESTEP){
            this.accumulator -= this.FIXED_TIMESTEP;
        }

        this.alpha = this.accumulator / this.FIXED_TIMESTEP;
    }

    resize(_gameSize, _baseSize, displaySize, _previousWidth, _previousHeight) {
        const {width, height} = displaySize;
        const newZoom = Math.round(Math.min(width/this.BASE_WIDTH, height/this.BASE_HEIGHT));
        this.cameras.main.setZoom(newZoom);
        this.cameras.main.setBounds(0, 0, width, height);
    }
}