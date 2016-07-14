;

class Fighter {
	/* Default settings */
	constructor(name, power, health) {
		this.name = name || "Unnamed fighter";
		this.power = power || 10;
		this.health = health || 100;
	}

	/* Not like in the task, but more in "ES6" style */
	set damage(damage) {
		if (damage < 0) { throw new Error("Negative damage!"); }
		
		this.health -= damage;
		console.log("health: " + this.health);
	}

	hit(enemy, point) {
		let damage = point * this.power;
		enemy.damage = damage;
	}

	/* String interpolation */
	toString() {
		return this.constructor.name + ` ${this.name}, power: ${this.power}, health: ${this.health}`;
	}
}

/* Inheritance */
class ImprovedFighter extends Fighter {
	doubleHit(enemy, point) {
		super.hit(enemy, point * 2);
	}
}

/* Arrow function + rest */
var fight = (fighter, improvedFighter, ...points) => {
	let firstIsLoser = true;

	for (let i = 0; i < points.length; i++) {
		fighter.hit(improvedFighter, points[i]);
		improvedFighter.doubleHit(fighter, points[i]);
		if (fighter.health <= 0) {
			break;
		} else if (improvedFighter.health <= 0) {
			firstIsLoser = false;
			break;
		}
	}

	console.log("The winner is " + (firstIsLoser ? improvedFighter : fighter));
}

var f1 = new Fighter("Alex", 12, 500);
let f2 = new ImprovedFighter("Max", 16, 800);

fight(f1, f2, 25, 13, 45); // The winner is ImprovedFighter Max, power: 16, health: 500
