const obj = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, ${this.name}`);
  },
  greetArrow: () => {
    console.log(`Hi, ${this.name}`);
  }
};

obj.greet();
obj.greetArrow();

const greet = obj.greet;
greet();

// Hello, Alice
// Hi,
// Hello,


class Person {
  name = 'John';
  greet() {
    console.log(`Hello, ${this.name}`);
  }
  greetArrow = () => {
    console.log(`Hi, ${this.name}`);
  }
}

const john = new Person();


john.greet();
john.greetArrow();

const greet = john.greet;
greet();

const greetArrow = john.greetArrow;
greetArrow();

// Hello, John
// Hi, John
// Throw error, in class, use strict mode by default, this is undefined, to fix greet.call(john)
