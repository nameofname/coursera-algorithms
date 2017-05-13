"use strict";


module.exports = callback => {
    const start = Date.now();
    callback();
    const end = Date.now();
    const time = end - start;
    return time;
};
