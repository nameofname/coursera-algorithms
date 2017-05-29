"use strict";


class Comparable {

    constructor(value) {
        this.value = value;
    }

    /**
     * To be over-ridden on a per-type basis.
     */
    compareTo(comparable) {
        if (this.value < comparable.value) {
            return -1;
        } else if (comparable.value < this.value) {
            return 1;
        }
        return 0;
    }
}

// Int doesn't need anything additional, compareTo method of Comparable is completely sufficient.
class Int extends Comparable {}

module.exports = {
    Int
};