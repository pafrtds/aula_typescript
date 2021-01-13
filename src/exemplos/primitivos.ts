export function exemploTipos() {
    let numero: number = 5;
    let nome: string = "lucas";
    let ehumano: boolean = false;

    console.log("o número é " + numero);
}

export function exemploIfLoop() {
    let contador = 0;
    while (contador <= 5) {
        if (contador === 2) {
            console.log("Chegou a 2");
        } else {
            console.log("não chegou");
        }
        console.log("Contador " + contador);
        contador++;
    }
}