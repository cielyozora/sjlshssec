const beep = () => {
  AUDIO.src = "sounds/beep.mp3";
}

let currentText = '';
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
  }

  else if (currentText !== qrCodeMessage) {
    currentText = qrCodeMessage;
    beep();
    customAlert.alert('Scan completed!','Heads Up!');
    
  }  
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

