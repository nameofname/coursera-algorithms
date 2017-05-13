"use strict";

const glob = require('glob');
glob.sync('/spec/**/*_spec.js', { root : __dirname }).forEach(require);
