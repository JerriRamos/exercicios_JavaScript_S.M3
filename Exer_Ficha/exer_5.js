let idade = 18;
let carta_conducao = true;

if (idade >= 18 && carta_conducao == !true) {
  console.log("Nao tem Carta conducao");
} else {
  if (idade >= 18 && carta_conducao == true) {
    console.log("Pode conduzir");
  } else {
    console.log("Menor nao pode conduzir");
  }
}
