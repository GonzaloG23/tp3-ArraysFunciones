const meses = ["Enero"," Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.writeln("<h2>Lista de Meses</h2>");

document.writeln(`<ul>`);
for (let i = 0; i < meses.length; i++) {
  document.writeln(`<li>${meses[i]}</li>`);
}
console.log(meses)