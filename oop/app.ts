// TypeScript Class Members and Methods

// Simple Class in TypeScript
class Pointed{}

// Fields in TypeScript
class Points {
    x: number = 2;
    y: number = 4;
}

const pt1 = new Points();
pt1.x = 0;
pt1.y = 0;

class Point1 {
    x = 1;
    y = 0;
}

const pt2 = new Point1();
console.log(`${pt2.x}, ${pt2.y}`);

const pt = new Point1();

class GoodGreeter {
    name: string;

    constructor() {
        this.name = "hello";
    }
}

class OKGreeter {
    name!: string;
}

// ReadOnly modifier in TypeScript

class Greeter {
    readonly name: string = "world";
   
    constructor(otherName?: string) {
      if (otherName !== undefined) {
        this.name = otherName;
      }
    }
  }
  const g = new Greeter();
  console.log(g)

// Constructors in TypeScript Classes

class Numeric {
    x: number;
    y: number;
   
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
}

const num = new Numeric(2, 4);
console.log(num.x, num.y);

class Numerical {
    x: number = 0;
    y: number = 0;
   
    constructor(x: number, y: number);
    constructor(xy: string);
    constructor(x: string | number, y: number = 0) {
        if (typeof x === 'number') {
          this.x = x;
          this.y = y;
        } else {
          this.x = 0;
        }
      }
}

const num1 = new Numerical(10, 4);
console.log(num1.x, num1.y);

// Super Calls in TypeScript Classes

class Base {
    k = 4;
}
   
class Derived extends Base {
    constructor() {
      super();
      console.log(`val`, this.k);
    }
}

// Methods in TypeScript Classes

class Greet {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "Hello, " + this.greeting;
    }
}

const greeter = new Greet("World!");
console.log(greeter.greet());

class Point {
    x = 10;
    y = 10;
   
    scale(n: number): void {
      this.x *= n;
      this.y *= n;
    }
}

const pt3 = new Point();
pt3.scale(1);
console.log(pt3.x, pt3.y);

let x: number = 0;
 
class C {
  x: string = "hello";
 
  m() {
    this.x = "world";
  }
}
const p4 = new C();
console.log(p4.x, p4.m());