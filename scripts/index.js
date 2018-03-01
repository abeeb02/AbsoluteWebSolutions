$(document).ready(function () {
    showHideDivElements();
    $('[data-toggle="popover"]').popover({ //Initialize popovers on nav links
        container: 'body',
        delay: 0,
        placement: 'bottom',
        trigger: 'hover'
    });
    //Make Start button blink
    setInterval(function() {
        ($('#blinky').css("visibility") === "visible") ?
            $('#blinky').css("visibility", "hidden") :
            $('#blinky').css("visibility", "visible");
      }, 750);
    //Event Listeners
    $('#secretGameStart').on('click', function(e) {
        
    });
    $('.image-holder').on('click', function (e) {
        if ($(this).attr('alt') === "Richard Ball") {
            setAnimateProperties("rb");
        } else {
            setAnimateProperties("ab");
        }
    });
});

function showHideDivElements() {
    $('#spaceShip').hide();
    $('#mrsPacMan').hide();
}

function setAnimateProperties(who) {
    var imgDiv, moveHorizontal,
        moveVertical, right, top, transform, resetTransform;

    if (who === "rb") {
        imgDiv = "#spaceShip";
        moveHorizontal = "+=150";
        moveVertical = "-=550";
        right = "80%";
        top = "50%";
        transform = "rotate(0deg)";
        resetTransform = "rotate(-90deg)";
    } else {
        imgDiv = "#mrsPacMan";
        move = "-=150";
        moveVertical = "+=550";
        right = "80%";
        top = "50%";
        transform = "rotate(0deg)";
        resetTransform = "rotate(-90deg)";
    }

    animateImages(imgDiv, moveHorizontal, moveVertical, right, top, transform, resetTransform);
}

function animateImages(i, h, v, right, top, t1, t2) {
    $(i).show();
    $(i).animate({
        right: h
    }, 2000, function () {
        $(this).css('transform', t1);
    });
    $(i).animate({
        top: v
    }, 2000, function () {
        $(this).css('right', right);
        $(this).css('top', top);
        $(this).css('transform', t2);
        $(this).hide();
    });
}