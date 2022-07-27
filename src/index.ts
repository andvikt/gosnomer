// import { information } from "./components/information";
import { InformationService } from "./components/information";
import { StandartService } from "./components/standarting";
import { ValidatorService } from "./components/validator";
import { IGosnomer } from "./information.type";

class Gosnomer {
    private plate: string;
    private validatorService: ValidatorService;
    private standartService: StandartService;
    private informationService: InformationService;

    constructor(plate: string) { 
        this.plate = plate;
        this.validatorService = new ValidatorService();
        this.standartService = new StandartService();
        this.informationService = new InformationService();
    }

    isValid(): boolean { 
        return this.validatorService.isValid(this.plate);
    }

    standart(): string {
        return this.standartService.getStandart(this.plate);
    }

    getInformation(): IGosnomer | { isValid: boolean } {
        return this.informationService.getInformation(this.plate);
    }
}

export { Gosnomer };