
const beep = () => {
  AUDIO.src = "sounds/beep.mp3";
}

var currentText = '';
function onScanSuccess(qrCodeMessage) {
    document.getElementById('result').innerHTML = '<span class="result">'+qrCodeMessage+'</span>';
    if (currentText !== qrCodeMessage) {
        currentText = qrCodeMessage;
        beep();
  }
}

function onScanError(errorMessage) {
  //handle scan error
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);



