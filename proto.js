function Parent() {
  this.a = 1;
  this.b = 2;
}

Parent.prototype.b = 3;
Parent.prototype.c = 4;

const child = new Parent();

console.log(child.a);
console.log(child.b);
console.log(child.c);
console.log(child.d);

child.a = 10;
child.b = 20;
console.log(child.a);
console.log(child.b);
console.log(Parent.prototype.b);