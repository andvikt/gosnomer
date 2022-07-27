class StandartService {
    public getStandart(plate: string) {
        return plate.replace(/\s/g, ' ').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
    }

    public getUpper(plate: string) {
        return plate.replace(/\s/g, '').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
    }

    public getRegion(plate: string) {
        return this.getStandart(plate).split(/[ ,]+/)[1];
    }
}

export { StandartService };