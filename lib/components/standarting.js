"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegion = exports.standarting = void 0;
const standarting = (plate) => {
    const number = plate.replace(/\s/g, ' ').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
    return number;
};
exports.standarting = standarting;
const getRegion = (plate) => {
    return (0, exports.standarting)(plate).split(/[ ,]+/)[1];
};
exports.getRegion = getRegion;
