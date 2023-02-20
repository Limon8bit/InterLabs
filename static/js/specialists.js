let specialistsCounter = 0;

function slideSpecialists(count){
    if(+vw == 375){
        $( '.specialists-wrap' ).css({
            'transform': `translateX(calc(-375px * ${count}))`,
        })
    } else if(+vw == 320){
        $( '.specialists-wrap' ).css({
            'transform': `translateX(calc(-320px * ${count}))`,
        })
    }
    
}

$( '.specialists__nav' ).find( '.specialistsLeft' ).on('tap', function(){
    if(specialistsCounter <= 0){
        specialistsCounter = 2;
    } else {
        --specialistsCounter;
    }

    slideSpecialists(specialistsCounter);
})

$( '.specialistsRight' ).on('tap', function(){
    if(specialistsCounter >= 2){
        specialistsCounter = 0;
    } else {
        ++specialistsCounter;
    }
    slideSpecialists(specialistsCounter);
})