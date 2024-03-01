"use strict";
class Casella {
    constructor(esMina) {
        this.esMina = esMina;
        this.revelada = false;
        this.marcada = false;
    }
}
const casellaConMina = new Casella(true);
console.log(casellaConMina);
const casellaSinMina = new Casella(false);
console.log(casellaSinMina);
