"use strict";

const Percolation = require('./percolation');
const rnd = (n) => Math.ceil(Math.random() * n);

module.exports = (n, trials) => {
    const ratios = [];
    let p;

    for (let i = 0; i < trials; i++) {
        let itar = 0;
        p = new Percolation(n);
        while(!p.percolates()) {
            const row = rnd(n);
            const col = rnd(n);
            if (p.isFull(row, col)) {
                p.open(row, col);
                itar++;
            }
        }
        ratios.push(itar / (n * n));
    }

    return ratios.reduce((prev, n) => (prev + n)) / ratios.length;
};
