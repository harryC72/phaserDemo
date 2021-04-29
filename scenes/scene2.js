demo.scene2 = function(){};
demo.scene2.prototype = {
	preload: function(){},
	create: function(){
		// this.background = this.add.image(0,0, "background");
		this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
	 this.background.setOrigin(0,0);

		// this.ship1 = this.add.image(config.width/2 - 50, config.height/2, "ship");
		// this.ship2 = this.add.image(config.width/2 - 50, config.height/2, 'ship2');
		// this.ship3 = this.add.image(config.width/2 - 50, config.height/2, "ship3");
		
		this.ship1 = this.add.sprite(config.width/2 - 50, config.height/2, "ship");
		this.ship2 = this.add.sprite(config.width/2, config.height/2, 'ship2');
		this.ship3 = this.add.sprite(config.width/2 + 50, config.height/2, "ship3");

		this.ship1.play("ship1_anim");
		this.ship2.play("ship2_anim");
		this.ship3.play("ship3_anim");

		this.ship1.setInteractive();
		this.ship2.setInteractive();
		this.ship3.setInteractive();

		this.input.on("gameobjectdown", this.destroyShip, this);

		this.powerUps = this.physics.add.group();
		

		let maxObjects = 4;

		for(let i = 0; i < maxObjects; i++){
			var powerUp = this.physics.add.sprite(16, 16, "power-up");
			this.powerUps.add(powerUp);
			if(Math.random() > 0.5){
				powerUp.play("red")
			}else{
				powerUp.play("gray")
			}
			powerUp.setCollideWorldBounds(true);
			powerUp.setVelocity(100, 100);
			
			powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);
		}

		this.player = this.physics.add.sprite(config.width / 2 - 8,  config.height - 64, "player");
		this.player.play("thrust");

		this.cursorKeys = this.input.keyboard.createCursorKeys();
		


		this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"})
	},
	update: function(){
		this.moveShip(this.ship1, 1);
		this.moveShip(this.ship2, 2);
		this.moveShip(this.ship3, 3);

		this.background.tilePositionY -= 0.5;

		this.movePlayerManager(); 

	},

	movePlayerManager(){
		
	},

	moveShip: function(ship, speed){
		ship.y += speed;
		if(ship.y >= config.height){
			this.resetShipPos(ship);
		}
	},
	resetShipPos(ship){
		ship.y = 0;
		let randomX = Phaser.Math.Between(0, config.width);
		ship.x = randomX;
	},
	destroyShip(pointer, gameObject){
		gameObject.setTexture("explosion");
		gameObject.play("explode");
	}
}