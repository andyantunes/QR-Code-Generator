var qrcode = new QRCode("qrcode", {
    text: "https://www.google.com",
    width: 200,
    height: 200,
    colorDark: backcolor.value,
    colorLight: frontcolor.value,
    correctLevel: QRCode.CorrectLevel.H
});

var qrOpacity = document.querySelector('.card-qrcode-img img');

btn_generate.addEventListener('click', function () {
    qrcode.clear(); // clear the code.
    if (!url.value) {
        qrOpacity.style = 'opacity: .5';
        qrcode.makeCode('https://www.google.com')
    } else {
        qrOpacity.style = 'opacity: 1';
        console.log(url.value);
        qrcode.makeCode(url.value); // make another code.
    }
});