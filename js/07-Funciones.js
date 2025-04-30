function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        document.writeln((`${numero} x ${i} = ${numero * i} <br>`));
    }
}

let numeroUsuario = prompt("Ingresa un número para ver su tabla de multiplicar:");
numeroUsuario = parseInt(numeroUsuario);

tablaMultiplicar (numeroUsuario)