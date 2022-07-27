"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gosnomer = void 0;
// import { information } from "./components/information";
const information_1 = require("./components/information");
const standarting_1 = require("./components/standarting");
const validator_1 = require("./components/validator");
class Gosnomer {
    constructor(plate) {
        this.plate = plate;
        this.validatorService = new validator_1.ValidatorService();
        this.standartService = new standarting_1.StandartService();
        this.informationService = new information_1.InformationService();
    }
    isValid() {
        return this.validatorService.isValid(this.plate);
    }
    standart() {
        return this.standartService.getStandart(this.plate);
    }
    getInformation() {
        return this.informationService.getInformation(this.plate);
    }
}
exports.Gosnomer = Gosnomer;
