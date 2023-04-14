var html5QrcodeScanner = new Html5Qrcode("reader");
html5QrcodeScanner.start(
  /* scanner stopped */
  function() {
    console.log("stopped");
  },
  /* scanning */
  function(qrCodeMessage) {
    console.log(qrCodeMessage);
    document.getElementById("result").innerHTML = qrCodeMessage;
  },
  /* error */
  function(error) {
    console.log(error);
  }
);
