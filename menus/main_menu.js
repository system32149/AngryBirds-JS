// Add behind elements.
ctx.globalCompositeOperation = 'source-over';
// Now draw!
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ANGRY BIRDS LOGO
ctx.globalCompositeOperation = 'source-over';
const logo_image = new Image();
logo_image.src = 'splits/MENU_LOGO.png';

logo_image.onload = function() {
    // Calculate the x and y coordinates to center the logo_image
    const x = (canvas.width - logo_image.width) * 0.5;
    const y = (canvas.height - logo_image.height) * 0.021875;

    // Draw the image at the calculated centered position
    ctx.drawImage(logo_image, x, y);
};