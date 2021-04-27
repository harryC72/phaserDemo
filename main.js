let config = {
	width: 256, 
	height: 272,
	 type: Phaser.AUTO,
	  parent: "gameContainer",
	}

	let game = new Phaser.Game(config);

game.scene.add("scene1", demo.scene1);
game.scene.add("scene2", demo.scene2);
game.scene.start("scene1");