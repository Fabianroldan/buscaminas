class Tauler {
    caselles: Casella[][];
    files: number;
    columnes: number;

    constructor(files: number, columnes: number) {
        this.files = files;
        this.columnes = columnes;
        this.caselles = [];
    }
}

class Joc {
    tauler: Tauler;

    constructor(files: number, columnes: number) {
        this.tauler = new Tauler(files, columnes);
    }
}

