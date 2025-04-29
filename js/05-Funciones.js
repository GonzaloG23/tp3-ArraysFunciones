function analizarTexto (texto){
    if (texto === texto.toUpperCase() && texto !== texto.toLowerCase())
 {document.writeln("El texto esta escrito con mayusculas")}
else if (texto === texto.toLowerCase()&& texto !== texto.toUpperCase()) {
    document.writeln("<br> El texto esta escrito con minisculas")
} else {
    document.writeln("<br> El texto contiene minisculas y mayusculas")
}}

analizarTexto ("HOLA MUNDO");
analizarTexto ("hola mundo");
analizarTexto ("Hola Mundo");