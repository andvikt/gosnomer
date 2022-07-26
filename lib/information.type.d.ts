interface IPlate {
    number: string;
    input: string;
}
interface IRegion {
    number: string;
    name: string | undefined;
}
export declare type IGosnomer = {
    isValid: boolean;
    plate: IPlate;
    region: IRegion;
};
export {};
