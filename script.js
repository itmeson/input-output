var number = document.getElementById("numberIn");
var outputDiv = document.getElementById("output");

number.addEventListener("change", computeOutput);

function computeOutput() {
  var N = number.value;
  outputDiv.innerText = N*N;  
}  