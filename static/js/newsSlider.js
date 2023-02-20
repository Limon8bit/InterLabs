let newsCounter = 0;
let vw = $( window ).width();

function slideNews(count){
    if(+vw == 375){
        $( '.news-newsWrap' ).css({
            'transform': `translateX(calc(-331px * ${count}))`,
        })
    } else if(+vw == 320){
        $( '.news-newsWrap' ).css({
            'transform': `translateX(calc(-276px * ${count}))`,
        })
    }
    
}

if(+vw >= 768){
    $( '.news-navigation__left' ).on('click', function(){
        $( '.news-newsWrap' ).css({
            'transform': 'translateX(0)',
        })
    })
    
    $( '.news-navigation__right' ).on('click', function(){
        $( '.news-newsWrap' ).css({
            'transform': 'translateX(calc(-315px - 34px))',
        })
    })
} else {
    $( '.news-navigation__left' ).on('touchstart', function(){
        if(newsCounter <= 0){
            newsCounter = 2;
        } else {
            --newsCounter;
        }
        slideNews(newsCounter);
    })

    $( '.news-navigation__right' ).on('touchstart', function(){
        if(newsCounter >= 2){
            newsCounter = 0;
        } else {
            ++newsCounter;
        }
        slideNews(newsCounter);
    })
}



