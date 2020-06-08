function soma(num1, num2) {
  return num1 + num2;
}

let num1 = parseInt(prompt("Insert num1"));
let num2 = parseInt(prompt("Insert num2"));

var result = soma(num1, num2);

if (Number.isInteger(result)) {
  alert(result);
} else {
  alert("Insert only Numbers");
}
