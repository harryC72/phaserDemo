demo.scene2 = function(){};
demo.scene2.prototype = {
	preload: function(){},
	create: function(){
		// this.background = this.add.image(0,0, "background");
		this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
	 this.background.setOrigin(0,0);

		this.ship1 = this.add.image(config.width/2 - 50, config.height/2, "ship");
		this.ship2 = this.add.image(config.width/2 - 50, config.height/2, 'ship2');
		this.ship3 = this.add.image(config.width/2 - 50, config.height/2, "ship3");


		this.add.text(20, 20, "Playing game", {font: "25px Arial", fill: "yellow"})
	},
	update: function(){
		this.moveShip(this.ship1, 1);
		this.moveShip(this.ship2, 2);
		this.moveShip(this.ship3, 3);

		this.background.tilePositionY -= 0.5;

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
	}
}