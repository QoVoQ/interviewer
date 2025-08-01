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