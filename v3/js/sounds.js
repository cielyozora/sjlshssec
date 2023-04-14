// https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
const DATA_URL = "sounds/beep";
const beep = () => {
  AUDIO.src = DATA_URL;
}

let currentText = '';
const onScanSuccess = (decodedText, decodedResult) => {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
  document.querySelector('#result').innerText = decodedText;
  if (currentText !== decodedText) {
    currentText = decodedText;
    beep(); 
  }
}

const html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);

const AUDIO = new Audio();
AUDIO.autoplay = true;
document.querySelector("#sound").addEventListener("click", () => {
  beep();
});
