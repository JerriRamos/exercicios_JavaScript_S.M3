let numero = [1, 2, 3, 4, 5];
let count = 1;

while (count <= 1) {
  for (var i = 0; i < numero.length; i++) {
    if (numero[i] % 2 == 0) {
      console.log(numero[i], "Par");
    } else {
      console.log(numero[i], "Impar");
    }
  }
  count++;
}
