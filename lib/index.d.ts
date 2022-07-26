import { IGosnomer } from "./information.type";
declare class Gosnomer {
    private plate;
    constructor(plate: string);
    isValid(): boolean;
    standart(): string;
    getInformation(): IGosnomer | {
        isValid: boolean;
    };
}
export { Gosnomer };
