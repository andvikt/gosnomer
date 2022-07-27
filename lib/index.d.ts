import { IGosnomer } from "./information.type";
declare class Gosnomer {
    private plate;
    private validatorService;
    private standartService;
    private informationService;
    constructor(plate: string);
    isValid(): boolean;
    standart(): string;
    getInformation(): IGosnomer | {
        isValid: boolean;
    };
}
export { Gosnomer };
