
$(function () {
    let w;
    w = Math.round(Math.random() * 150);

    $(`.circle`).css(`width`, `${w}px`),
        $(`.circle`).css(`height`, `${w}px`)

})

function randowCross() {

    let r, g, b, w, h, rr, gg, bb;
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    rr = Math.round(Math.random() * 255);
    gg = Math.round(Math.random() * 255);
    bb = Math.round(Math.random() * 255);
    w = Math.round(Math.random() * 250);
    h = Math.round(Math.random() * 250);

    $(`.circle`).animate({
        backgroundColor: `rgb(${r},${g},${b})`,
        borderColor: `rgb(${rr},${gg},${bb})`,
        boxShadow: `0 0 20px 10px rgb(${r},${g},${b})`,
        top: Math.random() * (window.innerHeight - `${h}`),
        left: Math.random() * (window.innerWidth - `${w}`),
    }, 800, `easeOutQuint`)

}
randowCross();
setInterval(randowCross, 800);