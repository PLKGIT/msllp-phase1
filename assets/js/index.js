var arrImages = new Array('/assets/images/home1_header.png', '/assets/images/home2_header.png', '/assets/images/home3_header.png');
var index = 1;

function rotateImage() {
    $('#myImage').fadeOut('fast', function () {
        $(this).attr('src', arrImages[index]);
        $(this).fadeIn('fast', function () {
            if (index == arrImages.length - 1) {
                index = 0;
            }
            else {
                index++;
            }
        });
    });
}

$(document).ready(function () {
    setInterval(rotateImage, 20000);
});