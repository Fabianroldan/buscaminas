"use strict";
class Tauler {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.caselles = [];
        // Inicializar el tablero con casillas
        for (let i = 0; i < filas; i++) {
            this.caselles[i] = [];
            for (let j = 0; j < columnas; j++) {
                this.caselles[i][j] = new Casella(false);
            }
        }
        // Distribuir las minas de manera aleatoria
        this.inicializarCaselles();
    }
    inicializarCaselles() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Generar un número de 1 a 10, si es menor que 3, asignar una mina
                const randomValue = Math.floor(Math.random() * 10) + 1;
                if (randomValue < 3) {
                    this.caselles[i][j].esMina = true;
                }
            }
        }
    }
}
// Ejemplo de uso
const tauler = new Tauler(8, 8);
console.log(tauler.caselles); // Muestra la matriz de casillas con las minas distribuidas aleatoriamente
