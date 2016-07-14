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

var f1 = new Fighter("Alex", 12, 500);
if (f1.power > 100) {
	let f2 = new Fighter();
}

console.log(f1); // Fighter {name: "Alex", power: 12, health: 500}
console.log(f2); // ReferenceError: f2 is not defined
