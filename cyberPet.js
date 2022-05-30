class Animal {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.hunger = 100;
    }
  
    drinks() {
      this.health += 5;
      return this;
    }
  
    eats() {
      this.health += 5;
      this.hunger += 10;
      console.log(`${this.name}'s health is ${this.health}`);
      return this;
    }
    stats() {
      return console.table({
        name: this.name,
        health: this.health,
        hunger: this.hunger,
      });
    }
  }
  // subclass extends another class...animal and INHERITS all the properties and methods of the parent class.
  class Lion extends Animal {
    // We only need to declare a constructor function in here if we want to apply new properties and methods to the subclass. If we don't it just inherits them from the parent class.
    constructor(name, content) {
      //Dog specific properties here
      super(name, content);
      this.content = content;
    }
    //Dog specific methods
    playBall() {
      this.health += 10;
      this.hunger -= 10;
      console.log(`${this.name} is happy`);
      return this;
    }
    walks() {
      console.log(`Taking ${this.name} for a walk, they are ${this.content}`);
      this.health += 10;
      return this;
    }
  }
  const stanley = new Dog("Stanley", "Wagging their tail");
  
  stanley.eats().walks().playBall().stats();