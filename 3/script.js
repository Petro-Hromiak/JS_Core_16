
$(function () {
    let boxTop;
    let boxLeft;
    $('.box').click(function () {
        console.log($(this).width())
        if ($(this).width() === 150) {
            let centerX = ((window.innerWidth - 400) / 2) - $(`.wrapper`).offset().left;

            let centerY = (window.innerHeight - 400) / 2;
            boxTop = $(this).position().top;
            boxLeft = $(this).position().left;
            $(this).css(`z-index`, `99`);
            $(this).css(`position`, `absolute`);

            $('.modal-container').css({
                backgroundColor: '#000000c7',
                zIndex: 3
            });

            $(this).animate({
                top: `${centerY}`,
                left: `${centerX}`,
                width: `400px`,
                height: `400px`,
                zIndex: `99`
            }, 1000)
        }
        else {
            $(this).animate({
                top: `${boxTop}`,
                left: `${boxLeft}`,
                width: `150px`,
                height: `150px`,
                zIndex: `2`,
            }, 1000, function () {
                $('.modal-container').css({
                    backgroundColor: '#fff',
                    zIndex: -1
                })
            })
            boxTop = 0;
            boxLeft = 0;
        }

    });

})
