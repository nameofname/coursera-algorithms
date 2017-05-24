"use strict";

let n = 10;
let count = 0;

// count will be N^2
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        count++;
    }
}
console.log(count);


// count will be N^3
count = 0;
for (let ii = 0; ii < n; ii++) {
    for (let jj = 0; jj < n; jj++) {
        for (let kk = 0; kk < n; kk++) {
            count++;
        }
    }
}

console.log(count);


// FACTORIAL NOTATION!
// When we find only unique - non repeating combinations of sequential numbers, we can use factorial notation
// to describe that growth! It's similar to quadratic growth for one nested loop, but doesn't grow quite as fast.
// The real function to determine the number of iterations in the inner loop is the series 1 + 2 + 3 ... N-1
// There's some fucking combinatorial math for y'all.

// count will be 1 + 2 + 3 ... + N-1
count = 0;
for (let a = 0; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
        console.log(`${a} - ${b}`);
        count++;
    }
}
console.log(count);
