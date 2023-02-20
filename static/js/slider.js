$( ".slider-firstButton" ).on('click', function(){
    $( ".parallax-top" ).css({
        'left' : '0px',
    })
    $( ".parallax-middle" ).css({
        'left' : '0px',
    })
    $( ".parallax-bottom" ).css({
        'left' : '0px',
    })
    $( '.slider-wrap').css({
        "transform": "translateX(0)",
    })
})

$( ".slider-secondButton" ).on('click', function(){
    $( ".parallax-top" ).css({
        'left' : '-50px',
    })
    $( ".parallax-middle" ).css({
        'left' : '-60px',
    })
    $( ".parallax-bottom" ).css({
        'left' : '-10px',
    })
    $( '.slider-wrap').css({
        "transform": "translateX(-100vw)",
    })
})

$( ".slider-thirdButton" ).on('click', function(){
    $( ".parallax-top" ).css({
        'left' : '-90px',
    })
    $( ".parallax-middle" ).css({
        'left' : '-130px',
    })
    $( ".parallax-bottom" ).css({
        'left' : '-30px',
    })
    $( '.slider-wrap').css({
        "transform": "translateX(-200vw)",
    })
})