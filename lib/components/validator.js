"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const validator = (plate) => {
    const number = plate.replace(/\s/g, '').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
    const plateStandartRegExp = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
    const plateTaxiRegExp = /^[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)\d{2,3}$/ui;
    const regTest = plateStandartRegExp.test(number) || plateTaxiRegExp.test(number);
    return regTest;
};
exports.validator = validator;
