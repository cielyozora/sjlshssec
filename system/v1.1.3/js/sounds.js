// https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
const DATA_URL = "sounds/beep1";
const beep = () => {
  AUDIO.src = DATA_URL;
}

let currentText = '';

// https://blog.minhazav.dev/research/html5-qrcode
// https://github.com/mebjas/html5-qrcode
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
	"reader", { fps: 10, qrbox: 200 });
html5QrcodeScanner.render(onScanSuccess);

const AUDIO = new Audio();
AUDIO.autoplay = true;
document.querySelector("#sound").addEventListener("click", () => {
  beep();
});
