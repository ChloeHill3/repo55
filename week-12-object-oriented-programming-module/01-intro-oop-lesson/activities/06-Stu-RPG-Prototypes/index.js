
function Character(name, profession, age, strength) {

   this.name = name;
   this.profession = profession;
   this.age = age;
   this.strength = strength

   this.hp = 10;

   if (profession.toLowerCase() === "barbarian")
       this.hp = 17;
   else if (profession.toLowerCase() === "wizard")
       this.hp = 6;





}

Character.prototype.printStats = function () {
   console.log(`
   ${this.name} the ${this.profession} (${this.age} years old)
   =================
   Strength:${this.strength}
   Hp:${this.hp}
   
   `)
}
Character.prototype.isAlive = function () {

   if (this.hp > 0)
       return true;
   else
       return false;
}

Character.prototype.attack = function (enemy) {

   enemy.hp -= this.strength;

}
Character.prototype.levelUp = function () {
   this.age++;
   this.strength += 5;
   this.hp += 25;


}

let character1 = new Character("Bob", "Barbarian", 55, 16)

let character2 = new Character("Brent", "Wizard", 112, 12)

character1.printStats();
character2.printStats();




character1.attack(character2);
character2.attack(character1);

character1.printStats();
character2.printStats();