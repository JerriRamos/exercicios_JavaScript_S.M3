let numero = 1;

function isPrime(numero) {
  for (i = 2; i < numero; i++) if (numero % i === 0) return false;
  return numero !== 1;
}

if (isPrime(numero)) {
  console.log("Primo");
} else {
  console.log("nao primo");
}
