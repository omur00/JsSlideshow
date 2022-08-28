$(document).ready(function () {
    var galleryImage = $(".gallery").find('img').first(); //img selector
    var images = [ //array if images to display
        'imgs/pexels-andreas-schmolmueller-3357026.jpg',
        'imgs/pexels-athena-1990241.jpg',
        'imgs/pexels-laker-6156388.jpg',
        'imgs/pexels-matheus-ferrero-1936769.jpg',
    ];

    var i = 0; //declaring index for interval
    setInterval(function () { //js interval function 
        i = (i + 1) % images.length; // 0 1 2 3 4, 0 1 2 3 4 .... //Remainder opperator
        galleryImage.fadeOut(function () {//gallery loop function
            $(this).attr('src', images[i]);//loops through array of imgs
            $(this).fadeIn();
        });
        console.log(galleryImage.attr('src'));
    }, 2000);





    var images = [ //array if images to display
        'imgs/pexels-andreas-schmolmueller-3357026.jpg',
        'imgs/pexels-athena-1990241.jpg',
        'imgs/pexels-laker-6156388.jpg',
        'imgs/pexels-matheus-ferrero-1936769.jpg',
    ];

    var i = 0; //declaring index for interval
    $(".gallery-on-click").find('img').on('click', function () {
        i = (i + 1) % images.length; // 0 1 2 3 4, 0 1 2 3 4 .... //Remainder opperator
        $(this).fadeOut(function () {
            $(this).attr('src', images[i]).fadeIn();
        });
    });
});