let config = {
	width: 256, 
	height: 272,
	backgroundColor: 0x0000,
	pixelArt: true,
	 type: Phaser.AUTO,
	 physics: {
		 default: "arcade",
		 arcade: {
			debug: false
		 }
	 }
	}

	let game = new Phaser.Game(config);

game.scene.add("scene1", demo.scene1);
game.scene.add("scene2", demo.scene2);
game.scene.start("scene1");