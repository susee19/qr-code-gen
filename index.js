const input = document.getElementById("userInput");
const btn = document.getElementById("saveBtn");

btn.addEventListener("click", function() {
  const value = input.value;
  localStorage.setItem("savedValue", value);
  alert("Saved: " + value);
});
var qr = require('qr-image');
var qr_svg = qr.image(value);
qr_svg.pipe(require('fs').createWriteStream('qr.png'));