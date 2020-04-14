var qr = new VanillaQR({
    url: 'https://www.google.com',
    width: 200,
    height: 200,
    colorLight: '#FFFFFF',
    colorDark: '#000000',
    noBorder: true
});

qrcode.appendChild(qr.domElement);

var qrOpacity = document.querySelector('.card-qrcode-img canvas');

btn_generate.addEventListener('click', function () {
    if (!url.value) {
        qrOpacity.style.opacity = '.5';
        url.style.borderColor = 'rgba(255, 0, 0, .5)';
        url.focus();

        qr.url = 'https://www.google.com';
        qr.init();
    } else {
        qrOpacity.style.opacity = '1';

        qr.url = url.value;
        qr.colorLight = lightcolor.value;
        qr.colorDark = darkcolor.value;

        qr.init();
    }
});

var newDarkcolor = document.querySelector('.darkcolor .input-group-text');
var newLightcolor = document.querySelector('.lightcolor .input-group-text');

darkcolor.addEventListener('keyup', function () {
    console.log(darkcolor.value);
    newDarkcolor.style.color = darkcolor.value;
    newLightcolor.style.color = darkcolor.value;
});

lightcolor.addEventListener('keyup', function () {
    console.log(lightcolor.value);
    newDarkcolor.style.background = lightcolor.value;
    newLightcolor.style.background = lightcolor.value;
});