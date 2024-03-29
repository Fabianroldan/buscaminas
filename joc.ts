class Joc {
    tauler: Tauler;

    constructor(filas: number, columnas: number) {
        this.tauler = new Tauler(filas, columnas);
        this.tauler.inicializarCaselles();
    }

    dibuixarTauler(): void {
        let tauler = '';

        for (let i = 0; i < this.tauler.filas; i++) {
            for (let j = 0; j < this.tauler.columnas; j++) {
                const casella = this.tauler.caselles[i][j];

                if (casella.revelada) {
                    if (casella.esMina) {
                        tauler += '💣';
                    } else {
                        tauler += '0';
                    }
                } else {
                    if (casella.marcada) {
                        tauler += '🚩';
                    } else {
                        tauler += '■';
                    }
                }
            }
            tauler += '\n';
        }

        console.log(tauler);
    }

    revelarCasella(fila: number, columna: number): void {
        const casella = this.tauler.caselles[fila][columna];

        if (!casella.revelada && !casella.marcada) {
            casella.revelada = true;

            if (casella.esMina) {
                alert('Joc acabat! Has perdut.');
            } else {
                this.dibuixarTauler();
            }
        }
    }


    marcarCasella(fila: number, columna: number): void {
        const casella = this.tauler.caselles[fila][columna];

        if (!casella.revelada) {
            casella.marcada = !casella.marcada;
            this.dibuixarTauler();
        }
    }
}
    

const joc = new Joc(8, 8);
joc.dibuixarTauler();
joc.revelarCasella(2, 3);
joc.marcarCasella(1, 1);
