function operate() {
  num1 = document.getElementById("num1").value;

  num2 = document.getElementById("num2").value;

  val = document.getElementById("myselectid").value;

  switch (val) {
    case "addition":
      result = parseInt(num1)+ parseInt(num2);

      document.getElementById("myspan").innerText = result;
      break;
    case "subtraction":
      result = num1 - num2;
      document.getElementById("myspan").innerText = result;
      break;
    case "multiplication":
      result = num1 * num2;
      document.getElementById("myspan").innerText = result;
      break;
    case "Division":
      result = num1 / num2;
      document.getElementById("myspan").innerText = result;
      break;
  }
}
