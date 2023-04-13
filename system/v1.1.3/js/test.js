function onScanSuccess(qrCodeMessage) {
    // handle the scanned code as you like, for example:
    document.getElementById('result').innerHTML = '<span class="result">'+qrCodeMessage+'</span>';

}

// Square QR box with edge size = 70% of the smaller edge of the viewfinder.
let qrboxFunction = function(viewfinderWidth, viewfinderHeight) {
    let minEdgePercentage = 0.5; // 70%
    let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
    let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
    return {
        width: qrboxSize,
        height: qrboxSize
    };
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: qrboxFunction },
    /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess);