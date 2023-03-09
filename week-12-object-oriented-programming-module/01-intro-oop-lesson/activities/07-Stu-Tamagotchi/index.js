function DigitalPal(name) {
   this.hungry = false;
   this.name = name;
   this.sleepy = true;
   this.bored = true;
   this.age = 0;
   this.running = true;
   this.goOutside = false;
   this.houseCondition = 100;
   this.feed = () => {
      if (this.hungry === true) {
         console.log("That was yummy!");
         this.hungry = false
      }
      else {
         console.log("No thanks! I'm full.");

      }
   };

   this.sleep = () => {
      if (this.sleepy === true) {
         console.log("Zzzzzzzzz!");
         this.increaseAge()
         this.sleepy = false
      }
      else {
         console.log("No way! I'm not tired.");

      }
   };

   this.play = () => {
      if (this.bored === true) {
         console.log("Yay! Let's play!");
         this.bored = false;
         this.hungry = true;
      }
      else {
         console.log("Not right now. Later?");

      }
   };

   this.increaseAge = function() {
      if (this.sleepy === true) {
         this.age++;
         console.log("Happy Birthday to me! I am " + this.age + " old!")
      }




   }

   this.bark = function() {
      if (this.running === true) {
         console.log("Woof! Woof!");
         this.goOutsideF()


      }
   };


   this.goOutsideF = function() {
      if (this.goOutside === false) {
         console.log("Yay! I love the outdoors!");
         this.goOutside=true;
         this.bark()
      }
      else {
         console.log("We're already outside though...");

      }
   };




}


let myNewPet = new DigitalPal("Pikachu");
myNewPet.feed();
myNewPet.play();
myNewPet.sleep();
myNewPet.increaseAge();
myNewPet.bark();
