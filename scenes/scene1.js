let demo = {};
demo.scene1 = function(){};
demo.scene1.prototype = {
	preload: function(){
		this.load.image("background", "../assets/background.png");
		this.load.image("ship", "../assets/ship.png");
		this.load.image("ship2", "../assets/ship2.png");
		this.load.image("ship3", "../assets/ship3.png");
	},
	create: function(){
		this.add.text(20, 20, "Loading game");
		this.time.addEvent({
			delay: 500,
			loop: false,
			callback: () => {
				this.scene.start("scene2");
			}
		})
	},
	update: function(){}
}