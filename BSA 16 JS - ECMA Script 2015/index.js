;

class Fighter {
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
		enemy.damage(damage);
	}
}

class ImprovedFighter extends Fighter {
	doubleHit(enemy, point) {
		super.hit(enemy, point * 2);
	}
}

var f1 = new Fighter("Alex", 12, 500);
let f2 = new ImprovedFighter("Max", 16, 800);

console.log(f1); 			// Fighter {name: "Alex", power: 12, health: 500}
console.log(f2);	// ImprovedFighter {name: "Max", power: 16, health: 800}
console.log(f1 instanceof Fighter); 		// true
console.log(f1 instanceof ImprovedFighter); // false
console.log(f2 instanceof Fighter); 		// true
console.log(f2 instanceof ImprovedFighter); // true
