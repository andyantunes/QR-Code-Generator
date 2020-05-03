var qr = new VanillaQR({
    url: 'https://www.google.com',
    width: 100,
    height: 100,
    colorLight: '#FFFFFF',
    colorDark: '#000000',
    noBorder: false,
    borderSize: 4,
    ecclevel: 3,
    mime: 'image/png',
    toTable: true
});

qrcode.appendChild(qr.domElement);

var qrOpacity = document.querySelector('.card-qrcode-img div');

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
        qr.ecclevel = precision.value;

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

btn_download.addEventListener('click', function () {
    let node = document.querySelector('table');

    // Convert to PNG
    domtoimage.toPng(node, {
            width: (size.value * 29),
            height: (size.value * 29)
        })
        .then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = 'my-image.png';
            link.href = dataUrl;
            link.click();
        });

    // Convert to JPEG
    // domtoimage.toJpeg(node, {
    //         quality: 0.95,
    //         width: 500,
    //         height: 500
    //     })
    //     .then(function (dataUrl) {
    //         let link = document.createElement('a');
    //         link.download = 'my-imge.jpeg';
    //         link.href = dataUrl;
    //         link.click();
    //     })
});

function downloadImage() {
    var canvas = document.querySelector('.card-qrcode-img div table');
    var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    var link = document.createElement('a');
    link.download = 'my-qrcode.png';
    link.href = image;
    link.click();
}

// function setAttributes(element, attributes) {
//     for (let key in attributes) {
//         element.setAttribute(key, attributes[key]);
//     }
// }