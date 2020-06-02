var celsiusInput = document.querySelector("#celsius > input");
var fahrenheitInput = document.querySelector("#fahrenheit > input");
var kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function celsiusToFahrAndKelvin() {
  var cTemp = parseFloat(celsiusInput.value);
  var fTemp = cTemp * (9 / 5) + 32;
  var kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrToCelsiusAndKelvin() {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = (fTemp - 32) * (5 / 9);
  let kTemp = (fTemp + 459.67) * (5 / 9);
  celsiusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelsiusAndFahr() {
  let kTemp = parseFloat(kelvinInput.value);
  let cTemp = kTemp - 273.15;
  let fTemp = (9 / 5) * (kTemp - 273.15) + 32;
  celsiusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}

function main() {
  celsiusInput.addEventListener("input", celsiusToFahrAndKelvin);
  fahrenheitInput.addEventListener("input", fahrToCelsiusAndKelvin);
  kelvinInput.addEventListener("input", kelvinToCelsiusAndFahr);
}

main();
