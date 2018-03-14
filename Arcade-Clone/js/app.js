// Enemies our player must avoid
var Enemy = function() {

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
	this.rangex = [-150, 600];
	this.possibley = [60, 140, 220];
	
    this.sprite = 'images/enemy-bug.png';
	
	this.define();
};

Enemy.prototype.define = function() {
	
	this.x = this.rangex[0];
	this.y = this.possibley[Math.floor(Math.random() * this.possibley.length)];
	this.speed = Math.floor((Math.random() * 100) + 250);
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiplying any movement by the dt parameter
    // ensure the game runs at the same speed for
    // all computers.
	
	var endpos = this.rangex[1];
	this.x += this.speed * dt;
	
	if (this.x > endpos) {
		this.define();
	}
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




var Player = function() {
	this.rangex = [-2, 402];
	this.rangey = [-20, 380];
	this.score = 0;
	
	this.sprite = 'images/char-boy.png';
	
	this.reset();
};

Player.prototype.update = function() {
	this.collisioncheck();
};


Player.prototype.collisioncheck = function() {
    if (this.y == -20) {
        this.reset();
		this.updatescore();
		
    } else if (this.y >= 60 && this.y <= 220) {
        var self = this;
	
        allEnemies.forEach(function(enemy) {
			
            if (enemy.y == self.y) {
			
				if (enemy.x >= player.x - 25 && enemy.x <= player.x + 25) {
					//console.log(enemy.x, player.x);
                    self.reset();
					self.resetscore();
                }
            }
        });
    }
}


Player.prototype.reset = function() {
    this.x = -2;
    this.y = 380;
}


Player.prototype.updatescore = function() {
	this.score += 1;
	console.log(this.score);
	
	var scoreelem = document.getElementById('score');
	scoreelem.innerHTML = "Score: " + this.score;
}

Player.prototype.resetscore = function() {
	this.score = 0;
	console.log(this.score);
	
	var scoreelem = document.getElementById('score');
	scoreelem.innerHTML = "Score: " + this.score;
}


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(key) {
    if (key === 'left') {
		if (this.x - 101 < this.rangex[0]) {
			this.x -= 0;
		} else {
			this.x -= 101;
		}		
    } 
	
	else if (key === 'right') {
		if (this.x + 101 > this.rangex[1]) {
			this.x += 0;
		} else {
			this.x += 101;
		}		
    } 
	
	else if (key === 'up') {
		if (this.y - 80 < this.rangey[0]) {
			this.y -= 0;
		} else {
			this.y -= 80;
		}		
    } 
	
	else if (key === 'down') {
		if (this.y + 80 > this.rangey[1]) {
			this.y += 0;
		} else {
			this.y += 80;
		}		
    }
	//console.log(this.x, this.y);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
	

    player.handleInput(allowedKeys[e.keyCode]);
});


// Place all enemy objects in an array called allEnemies
var bug1 = new Enemy();
var bug2 = new Enemy();
var bug3 = new Enemy();

var allEnemies = [bug1, bug2, bug3];

// Place the player object in a variable called player
var player = new Player();
