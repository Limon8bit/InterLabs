let windowWidth = $( window ).width();

if (windowWidth <= '768'){
    $( '.subscribeButton' ).val('');
} else {
    $( '.subscribeButton' ).val('подписаться');
}
