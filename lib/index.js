"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gosnomer = void 0;
const information_1 = require("./components/information");
const standarting_1 = require("./components/standarting");
const validator_1 = require("./components/validator");
class Gosnomer {
    constructor(plate) { this.plate = plate; }
    isValid() {
        return (0, validator_1.validator)(this.plate);
    }
    standart() {
        return (0, standarting_1.standarting)(this.plate);
    }
    getInformation() {
        return (0, information_1.information)(this.plate);
    }
}
exports.Gosnomer = Gosnomer;
