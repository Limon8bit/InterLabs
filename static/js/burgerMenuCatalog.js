let showBurger = false;
let showCatalog = false;


// Скрипт на отображение бургер меню
function showBurgerMenu(burgerStatus) {
    if (burgerStatus){
        $( '.burgerMenu' ).css({
            'display': 'flex',
        })
        $( 'html' ).css({
            'overflow': 'hidden'
        })
    } else {
        $( '.burgerMenu' ).css({
            'display': 'none',
        })
        $( 'html' ).css({
            'overflow': 'auto'
        })
    }
}

$( '.fixedMenu-tel_search_burger' ).find( 'label' ).on('click', function(){
    showBurger = !showBurger;
    showBurgerMenu(showBurger);
})

$( '.closeBurgerMenu' ).on('click', function(){
    showBurger = !showBurger;
    showBurgerMenu(showBurger);
})


// Скрипт на отркрытие каталога в бургере
function openUnderlist(showUL){
    let catalog = $( '#burgerMenu-catalog' );
    if (showUL){
        catalog.css({'color': '#EF4D9C'});
        catalog.find('svg').css({
            'transform': 'rotate(-180deg)',
        });
        catalog.find('ul').css({
            'display': 'flex',
        })
    } else {
        catalog.css({'color': '#333'});
        catalog.find('svg').css({
            'transform': 'rotate(0deg)',
        });
        catalog.find('ul').css({
            'display': 'none',
        })
    }
}   

$( '#burgerMenu-catalog' ).on('click', function(){
    showCatalog = !showCatalog;
    openUnderlist(showCatalog);
})
