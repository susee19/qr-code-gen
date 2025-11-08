
const input = document.getElementById("userInput");
const btn = document.getElementById("saveBtn");
const qrContainer = document.getElementById("qrcode");
btn.addEventListener("click", function() {
  const value = input.value.trim();
  if (value === "") {
    alert("Please type something!");
    return;
  }
 qrContainer.innerHTML = "";
 new QRCode(qrContainer, value);
});
