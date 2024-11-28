"use strict";
class Points {
    constructor() {
        this.x = 2;
        this.y = 4;
    }
}
const pt1 = new Points();
pt1.x = 0;
pt1.y = 0;
class Point {
    constructor() {
        this.x = 1;
        this.y = 0;
    }
}
const pt2 = new Point();
// Prints 0, 0
console.log(`${pt2.x}, ${pt2.y}`);
const pt = new Point();
class GoodGreeter {
    constructor() {
        this.name = "hello";
    }
}
class OKGreeter {
}
