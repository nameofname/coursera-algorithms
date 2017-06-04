"use strict";

const Comparable = require('./Comparable');


class Point extends Comparable {

    constructor(value) {
        this.x = value[0];
        this.y = value[1];
        super(value);
    }

    toString() {
        return `[ ${this.x}, ${this.y} ]`;
    }


    compareTo(point) {
        if (this.y === point.y) {
            return this.x > point.x ? this : point;
        } else {
            return this.y > point.y ? this : point;
        }
    }

    slopeTo(point) {
        if (this.y === point.y && this.x === point.x) {
            return -Infinity;
        } else if (this.y === point.y) {
            return Infinity;
        } else if (this.x === point.x) {
            return 0;
        } else {
            return (this.y = point.y) / (this.x = point.x);
        }
    }

    slopeOrder() {
        const comp = new Comparable();
        comp.compareTo = (point) => {
            return slopeGuy();//TODO!
        }
    }

}


module.exports = Point;