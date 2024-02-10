window.onload = function () {
    let banner = document.getElementById('banner');
    banner.style.backgroundImage = 'url(../imagenes/wallpaper2.jpg)';
}


document.getElementById('changeWallpaper').addEventListener('click', function () {

    let banner = document.getElementById('banner');

    let images = ['../imagenes/wallpaper1.jpg', '../imagenes/wallpaper2.jpg', '../imagenes/wallpaper3.jpg'];

    let randomIndex = Math.floor(Math.random() * images.length);

    banner.style.backgroundImage = 'url(' + images[randomIndex] + ')';
})