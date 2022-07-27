import { StandartService } from "./standarting";

export const validator = (plate: string) => {
    const number = plate.replace(/\s/g, '').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
    const plateStandartRegExp = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
    const plateTaxiRegExp = /^[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)\d{2,3}$/ui;
    const regTest = plateStandartRegExp.test(number) || plateTaxiRegExp.test(number);
    return regTest;
}

class ValidatorService {
    private car: RegExp;
    private taxi: RegExp;
    private trailer: RegExp;
    private bike: RegExp;
    private transit: RegExp;
    private outbound: RegExp;
    private standartService: StandartService;

    constructor() {
        this.car = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
        this.taxi = /^[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)\d{2,3}$/ui;
        this.trailer = /^[АВЕКМНОРСТУХ]{2}\d{4}(?<!0000)\d{2,3}$/ui;
        this.bike = /^\d{4}(?<!0000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
        this.transit = /^[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)[АВЕКМНОРСТУХ]\d{2,3}$/ui;
        this.outbound = /^Т[АВЕКМНОРСТУХ]{2}\d{3}(?<!000)\d{2,3}$/ui;
        this.standartService = new StandartService();
    }

    private regExpArray(): RegExp[] {
        return [this.bike, this.car, this.taxi, this.trailer, this.bike, this.transit, this.outbound];
    }

    public isValid(plate: string): boolean {
        const standartPlate = this.standartService.getUpper(plate);
        const regExps = this.regExpArray();
        const validArr: boolean[] = [];

        regExps.map(regExp => {
            validArr.push(regExp.test(standartPlate));
        });

        return validArr.reduce((a, b) => a || b);
    }
}

export { ValidatorService };