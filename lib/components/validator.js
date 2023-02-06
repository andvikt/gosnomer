"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorService = exports.validator = void 0;
const standarting_1 = require("./standarting");
const validator = (plate) => {
    const number = plate.replace(/\s/g, '').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
    const plateStandartRegExp = /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
    const plateTaxiRegExp = /^[АВЕКМНОРСТУХ]{2}\d{3}\d{2,3}$/ui;
    const regTest = plateStandartRegExp.test(number) || plateTaxiRegExp.test(number);
    return regTest;
};
exports.validator = validator;
class ValidatorService {
    constructor() {
        this.car = /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
        this.taxi = /^[АВЕКМНОРСТУХ]{2}\d{3}\d{2,3}$/ui;
        this.trailer = /^[АВЕКМНОРСТУХ]{2}\d{4}\d{2,3}$/ui;
        this.bike = /^\d{4}[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
        this.transit = /^[АВЕКМНОРСТУХ]{2}\d{3}[АВЕКМНОРСТУХ]\d{2,3}$/ui;
        this.outbound = /^Т[АВЕКМНОРСТУХ]{2}\d{3}\d{2,3}$/ui;
        this.standartService = new standarting_1.StandartService();
    }
    regExpArray() {
        return [this.bike, this.car, this.taxi, this.trailer, this.bike, this.transit, this.outbound];
    }
    isValid(plate) {
        const standartPlate = this.standartService.getUpper(plate);
        const regExps = this.regExpArray();
        const validArr = [];
        regExps.map(regExp => {
            validArr.push(regExp.test(standartPlate));
        });
        return validArr.reduce((a, b) => a || b);
    }
}
exports.ValidatorService = ValidatorService;
