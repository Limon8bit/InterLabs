let showSearchline = false;

function showSearch(searchlineStatus){
    if(searchlineStatus){
        $( ".searchline" ).css({
            'display': 'flex',
        })
        $( 'html' ).css({
            'overflow': 'hidden',
        })
    } else {
        $( ".searchline" ).css({
            'display': 'none',
        })
        $( 'html' ).css({
            'overflow': 'auto',
        })
    }
}

$( ".callSearchline" ).on('click', function(){
    showSearchline = !showSearchline;
    showSearch(showSearchline);
})

$( ".close" ).on('click', function(){
    showSearchline = !showSearchline;
    showSearch(showSearchline);
})
