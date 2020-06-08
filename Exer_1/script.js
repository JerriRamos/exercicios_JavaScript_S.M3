function soma(num1, num2) {
  return num1 + num2;
}

let num1 = Number(prompt("Insert num1"));
let num2 = Number(prompt("Insert num2"));

const result = soma(num1, num2);

if (!isNaN(result)) {
  alert(result);
} else {
  alert("Insert only Numbers");
}
