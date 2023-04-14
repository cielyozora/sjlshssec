const beep = () => {
  AUDIO.src = "sounds/beep.mp3";
}

/*
function resultx(res) {
  const info = res.split(',');
  let name = info[0];
  console.log(name);

}
*/

let currentText = '';
function onScanSuccess(qrCodeMessage) {
    let result = qrCodeMessage.split(',');
    let xlength = result.length;

    console.log(xlength);
    const fname = result[0];
    const lname = result[1];

    if (xlength < 7) {
      beep();
      alert("Error! QrCode Malformed");
  }

    else if (currentText !== qrCodeMessage) {
        currentText = qrCodeMessage;
        beep();
        alert("Scan complete!");
  }
  document.getElementById('fname').value = fname;
  document.getElementById('lname').value = lname;

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

