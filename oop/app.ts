class Points {
    x: number = 2;
    y: number = 4;
}

const pt1 = new Points();
pt1.x = 0;
pt1.y = 0;

class Point {
    x = 1;
    y = 0;
}

const pt2 = new Point();
// Prints 0, 0
console.log(`${pt2.x}, ${pt2.y}`);

const pt = new Point();

class GoodGreeter {
    name: string;

    constructor() {
        this.name = "hello";
    }
}

class OKGreeter {
    // Not initialized, but no error
    name!: string;
}
