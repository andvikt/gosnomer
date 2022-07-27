import { IGosnomer } from "../information.type";
import { StandartService } from "./standarting";
import { ValidatorService } from "./validator";
declare class InformationService {
    private readonly standartService;
    private readonly validatorService;
    constructor(standartService?: StandartService, validatorService?: ValidatorService);
    private plate;
    private region;
    getInformation(i: string): IGosnomer | {
        isValid: boolean;
    };
}
export { InformationService };
