

$(function () {

    let r, g, b, w, h;
    $(`.circle`).on(`click`, function () {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        w = Math.round(Math.random() * 250);
        h = Math.round(Math.random() * 250);
        $(`.circle`).animate({
            backgroundColor: `rgb(${r},${g},${b})`,
            width: `${w}`,
            height: `${h}`,
            top: Math.random() * (window.innerHeight-`${h}`),
            left: Math.random() * (window.innerWidth-`${w}`),
        },2000,`easeInOutBack`)
    })
})