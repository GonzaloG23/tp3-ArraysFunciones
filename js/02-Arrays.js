const ciudades = [];
    let ciudad;

    while (true) {
        ciudad = prompt("Ingrese una ciudad (o presione Cancelar para terminar):");
        if (ciudad === null) {
            break;
        }
        ciudades.push(ciudad);
        ciudades.push("Paris");
        ciudades[1] = "Barcelona";

    }
    document.writeln("<br>Cantidad de ciudades: " + ciudades.length);

    document.writeln("<br>La segunda ciudad es: " + ciudades[1]);



    document.writeln("<h2>Lista de ciudades</h2>");
    document.writeln(`<ul>`);
    for (let i = 0; i < ciudades.length; i++) {
      document.writeln(`<li>${ciudades[i]}</li>`);
    }
    console.log(ciudades)




