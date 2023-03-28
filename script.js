let btn = document.querySelector(".button");
let qr_code_element = document.querySelector(".qr-code");

btn.addEventListener("click", () => {
  let user_input = document.querySelector("#inputname");
  if (user_input.value != "") {
    if (qr_code_element.childElementCount == 0) {
      generate(user_input);
    } else {
      qr_code_element.innerHTML = "";
      generate(user_input);
    }
  } else {
    console.log("not valid input");
    qr_code_element.style = "display: none";
  }
});

function caps(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function generate(user_input) {
  qr_code_element.style = "";

  var qrcode = new QRCode(qr_code_element, {
    text: `${caps(user_input.value)},${caps(inputln.value)},${caps(gradesection.value)},${caps(inputlrn.value)},${caps(inputemail.value)},${caps(inputcontact.value)}`,
    width: 180, //128
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  let download = document.createElement("button");
  qr_code_element.appendChild(download);

  let download_link = document.createElement("a");
  download_link.setAttribute("download", `${inputln.value} ${gradesection.value}.png`);
  download_link.innerHTML = `Download <i class="fa-solid fa-download"></i>`;

  download.appendChild(download_link);

  let qr_code_img = document.querySelector(".qr-code img");
  let qr_code_canvas = document.querySelector("canvas");

  if (qr_code_img.getAttribute("src") == null) {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
    }, 300);
  } else {
    setTimeout(() => {
      download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
    }, 300);
  }
}

generate({
  value: "https://m.me/xzx.gov.ph"
});