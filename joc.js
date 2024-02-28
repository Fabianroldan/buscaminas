"use strict";
class Casella {
    constructor() {
        this.esMina = false;
        this.revelada = false;
        this.marcada = false;
    }
}
class Tauler {
    constructor(files, columnes) {
        this.files = files;
        this.columnes = columnes;
        this.caselles = [];
    }
}
class Joc {
    constructor(files, columnes) {
        this.tauler = new Tauler(files, columnes);
    }
}
