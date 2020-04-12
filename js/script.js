var qrcode = new QRCode("qrcode", {
    text: "https://www.google.com",
    width: 200,
    height: 200,
    colorDark: darkcolor.value,
    colorLight: lightcolor.value,
    correctLevel: QRCode.CorrectLevel.H
});

var qrOpacity = document.querySelector('.card-qrcode-img img');

btn_generate.addEventListener('click', function () {
    qrcode.clear(); // clear the code.
    if (!url.value) {
        qrOpacity.style.opacity = '.5';
        qrcode.makeCode('https://www.google.com')
    } else {
        qrOpacity.style.opacity = '1';
        qrcode.makeCode(url.value); // make another code.
    }
});

var newDarkcolor = document.querySelector('.darkcolor .input-group-text');
var newLightcolor = document.querySelector('.lightcolor .input-group-text');

darkcolor.addEventListener('keyup', function () {
    console.log(darkcolor.value);
    newDarkcolor.style.color = darkcolor.value;
    newLightcolor.style.color = darkcolor.value;

    // newDarkcolor.style.color = lightcolor.value;
    // newLightcolor.style.color = lightcolor.value;
});

lightcolor.addEventListener('keyup', function () {
    // newDarkcolor.style = 'background: ' + darkcolor.value;
    // newLightcolor.style = 'background: ' + darkcolor.value;
    console.log(lightcolor.value);
    newDarkcolor.style.background = lightcolor.value;
    newLightcolor.style.background = lightcolor.value;
});