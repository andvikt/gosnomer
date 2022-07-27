export declare const validator: (plate: string) => boolean;
declare class ValidatorService {
    private car;
    private taxi;
    private trailer;
    private bike;
    private transit;
    private outbound;
    private standartService;
    constructor();
    private regExpArray;
    isValid(plate: string): boolean;
}
export { ValidatorService };
