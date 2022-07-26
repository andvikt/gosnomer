"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.information = void 0;
const standarting_1 = require("./standarting");
const validator_1 = require("./validator");
const regions_json_1 = __importDefault(require("../data/regions.json"));
const information = (p) => {
    var _a;
    const isValid = (0, validator_1.validator)(p);
    let json = { isValid };
    if (isValid) {
        const plate = {
            input: p,
            number: (0, standarting_1.standarting)(p)
        };
        const region = {
            number: (0, standarting_1.getRegion)(p),
            name: (_a = regions_json_1.default.find(r => r.id === parseInt((0, standarting_1.getRegion)(p)))) === null || _a === void 0 ? void 0 : _a.name
        };
        return Object.assign(Object.assign({}, json), { plate, region });
    }
    return json;
};
exports.information = information;
