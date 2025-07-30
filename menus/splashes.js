const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ROVIO LOGO SPLASH
const rovio_image = new Image();
rovio_image.src = 'assets/SPLASHES_SHEET_2.png';

rovio_image.onload = function() {
    // Calculate the x and y coordinates to center the rovio_image
    const x = (canvas.width - rovio_image.width) * 0.5;
    const y = (canvas.height - rovio_image.height) * 0.5;

    // Draw the image at the calculated centered position
    ctx.drawImage(rovio_image, x, y);
};

// COPYRIGHT TEXT
const copyright_image = new Image();
copyright_image.src = 'splits/SPLASHES_COPYRIGHT.png';

copyright_image.onload = function() {
    // Calculate the x and y coordinates to center the copyright_image
    const x = (canvas.width - copyright_image.width) * 0.5;
    const y = (canvas.height - copyright_image.height);

    // Draw the image at the calculated centered position
    ctx.drawImage(copyright_image, x, y);
};

// ANGRY BIRDS SPLASH
/*
const angrybirds_image = new Image();
angrybirds_image.src = 'assets/SPLASHES_SHEET_1.png';

angrybirds_image.onload = function() {
    // Calculate the x and y coordinates to center the angrybirds_image
    const x = (canvas.width - angrybirds_image.width) * 0.5;
    const y = (canvas.height - angrybirds_image.height) * 0.5;

    // Draw the image at the calculated centered position
    ctx.drawImage(angrybirds_image, x, y);
};*/

/*
setTimeout(() => {
  alert("Starting title_screen");
}, 1000);*/