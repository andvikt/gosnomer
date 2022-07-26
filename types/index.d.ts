import { IGosnomer } from '../src/information.type';

declare module "license-plate-ru" {
    export default class LicensePlateRu {
        static setPlate(plate: string): any;
        static isValid(): boolean;
        static standart(): string;
        static getInformation(): IGosnomer;
    }
}