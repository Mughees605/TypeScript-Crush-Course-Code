"use strict";
// TypeScript Class Members and Methods
// Simple Class in TypeScript
class Pointed {
}
// Fields in TypeScript
class Points {
    constructor() {
        this.x = 2;
        this.y = 4;
    }
}
const pt1 = new Points();
pt1.x = 0;
pt1.y = 0;
class Point1 {
    constructor() {
        this.x = 1;
        this.y = 0;
    }
}
const pt2 = new Point1();
console.log(`${pt2.x}, ${pt2.y}`);
const pt = new Point1();
class GoodGreeter {
    constructor() {
        this.name = "hello";
    }
}
class OKGreeter {
}
// ReadOnly modifier in TypeScript
class Greeter {
    constructor(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
}
const g = new Greeter();
console.log(g);
// Constructors in TypeScript Classes
class Numeric {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
const num = new Numeric(2, 4);
console.log(num.x, num.y);
class Numerical {
    constructor(x, y = 0) {
        this.x = 0;
        this.y = 0;
        if (typeof x === 'number') {
            this.x = x;
            this.y = y;
        }
        else {
            this.x = 0;
        }
    }
}
const num1 = new Numerical(10, 4);
console.log(num1.x, num1.y);
// Super Calls in TypeScript Classes
class Base {
    constructor() {
        this.k = 4;
    }
}
class Derived extends Base {
    constructor() {
        super();
        console.log(`val`, this.k);
    }
}
// Methods in TypeScript Classes
class Greet {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
const greeter = new Greet("World!");
console.log(greeter.greet());
class Point {
    constructor() {
        this.x = 10;
        this.y = 10;
    }
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
const pt3 = new Point();
pt3.scale(1);
console.log(pt3.x, pt3.y);
let x = 0;
class C {
    constructor() {
        this.x = "hello";
    }
    m() {
        this.x = "world";
    }
}
const p4 = new C();
console.log(p4.x, p4.m());
