import { IGosnomer, IPlate, IRegion } from "../information.type";
import regions from '../data/regions.json';
import { StandartService } from "./standarting";
import { ValidatorService } from "./validator";

// export const information = (p: string): IGosnomer | { isValid: boolean } => {
//     const isValid = validator(p);
//     let json = { isValid };

//     if (isValid) {
//         const plate = {
//             input: p,
//             number: standarting(p)
//         }
//         const region = {
//             number: getRegion(p),
//             name: regions.find(r => r.id === parseInt(getRegion(p)))?.name
//         }
//         return { ...json, plate, region };
//     }
//     return json;
// }

class InformationService {
    constructor(
        private readonly standartService = new StandartService(),
        private readonly validatorService = new ValidatorService()
    ) { }

    private plate(input: string): IPlate {
        const standart = this.standartService.getStandart(input);
        return { standart, input };
    }

    private region(input: string): IRegion {
        const standart = this.standartService.getStandart(input);
        const getPlateNumber = parseInt(this.standartService.getRegion(input));
        const region = regions.find(r => r.id === getPlateNumber)?.name;
        return { standart, region };
    }
    public getInformation(i: string): IGosnomer | { isValid: boolean } {
        const valid = this.validatorService.isValid(i);
        return valid
            ? {
                isValid: this.validatorService.isValid(i),
                plate: this.plate(i),
                region: this.region(i)
            }
            : { isValid: valid }
    }
}

export { InformationService };