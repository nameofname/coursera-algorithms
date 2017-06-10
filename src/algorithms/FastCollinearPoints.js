"use strict";

const Point = require('../dataStructures/Point');
const { Comparable, Int } = require('../dataStructures/Comparable');
const { less, greater } = require('../helpers/sortingHelpers');
const MergeSort = require('./MergeSort');
class SlopeComparable extends Int {
    constructor(value, point1, point2) {
        this.value = value;
        this.point1 = point1;
        this.point2 = point2;
        super(value);
    }
}
class Segment {
    constructor() {
        this.points = [];
        this.low = null;
        this.high = null;
    }
    addPoint (point) {
        this.points.push(point);

        // if new point is lower than this.low, then record new low point
        if (this.low === null) {
            this.low = point;
        } else {
            this.low = less(point, this.low) ? point : this.low;
        }

        if (this.high === null) {
            this.high = point;
        } else {
            this.high = greater(point, this.high) ? point : this.high;
        }
    }
    getSegmentKey () {
        return `${this.low.toString()} - ${this.high.toString()}`;
    }
}

const fastColinearPoints = (arrayOfPoints) => {

    const lineSegments = {};
    let slopes = [];

    const points = arrayOfPoints.map(arr => {
        return new Point(arr);
    });

    for (let p = 0; p < points.length; p++) {
        slopes = [];

        for (let q = 0; q < points.length; q++) {
            const slope = points[q].slopeTo(points[p]);
            slopes.push(new SlopeComparable(slope));
            const sortedSlopes = new MergeSort(slopes).sort();

            let currSlope = sortedSlopes[0];
            let currSegment = new Segment();
            currSegment.addPoint(sortedSlopes[0].point1);
            currSegment.addPoint(sortedSlopes[0].point2);
            for (var i = 1; i < sortedSlopes.length; i++) {

                if (currSlope === sortedSlopes[i]) {
                    // IF the current slope is the same as the last slope, then add your points to the current segment
                    currSegment.addPoint(sortedSlopes[i].point1);
                    currSegment.addPoint(sortedSlopes[i].point2);

                } else {
                    // if current slope is NOT the same as the last slope, then we know we are starting a new segment.
                    // First check if the current segment is longer than 3 points, and if so, we add it to the
                    // lineSegments object based on it's unique key. Next we "reset the clock" by creating a new segment
                    // so the process can start over.
                    if (currSegment.points.length >= 4) {
                        lineSegments[currSegment.getSegmentKey()] = currSegment;
                    }
                    currSegment = new Segment();
                    currSegment.addPoint(sortedSlopes[i].point1);
                    currSegment.addPoint(sortedSlopes[i].point2);
                }

                currSlope = sortedSlopes[i];
            }
        }
    }

    return lineSegments;
};

module.exports = fastColinearPoints;