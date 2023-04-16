const beep = () => {
  AUDIO.src = "sounds/beep.mp3";
}

let currentText = '';
let previousScanData = '';

function onScanSuccess(qrCodeMessage) {
  let result = qrCodeMessage.split(',');
  let xlength = result.length;

  console.log(xlength);
  const fname = result[0];
  const lname = result[1];
  const phone = result[5];

  if (xlength < 7) {
    beep();
    customAlert.alert('Invalid Qr Code Data!\nReason: QrCode is malformed.','Error!');
    return;
  }

  const currentScanData = `${fname}-${lname}-${phone}`;
  if (currentScanData === previousScanData) {
    //alert('Form data is the same as previous submission. Please scan a new QR code.');
    return;
  }

  previousScanData = currentScanData;

  beep();
  document.getElementById('fname').value = fname;
  document.getElementById('lname').value = lname;
  document.getElementById('phone').value = phone;
  formsubmit();
}



function onScanError(errorMessage) {
  //handle scan error
}

const AUDIO = new Audio();
AUDIO.autoplay = true;
document.querySelector("#sound").addEventListener("click", () => {
  beep();
});

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250});
html5QrcodeScanner.render(onScanSuccess, onScanError);

