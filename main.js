let game = new Phaser.Game({width: 600, height: 400, type: Phaser.AUTO});
game.scene.add("state1", demo.scene1);
game.scene.start("state1");