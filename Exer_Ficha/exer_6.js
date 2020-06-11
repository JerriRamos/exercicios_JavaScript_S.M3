let idade = 18;
let carta_conducao = true;

switch (idade >= 18 && carta_conducao) {
  case true:
    console.log("Pode conduzir");
    break;
  case false:
    console.log("Nao pode conduzir");
    break;
}
