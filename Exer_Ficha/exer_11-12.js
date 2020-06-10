let numero = 2;
let divisores = 0;

function isPrime(numero) {
  for (count = 1; count <= numero; count++) {
    if (numero % count == 0) {
      divisores++;
    }
  }
  return divisores;
}

if (isPrime(numero) == 2) {
  console.log("Primo");
} else {
  console.log("nao primo");
}
