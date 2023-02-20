// Код для отображения окна фидбэка

let feedbackVisibility = false;

function showFeedback(feedbackVisibilityStatus){
    if(feedbackVisibilityStatus){
        $( '.feedback' ).css({
            'display': 'flex',
        })
        $( '.feedback-modal' ).css({
            'animation-name': 'feedbackOpen',
            'animation-duration': '0.15s',
        })
        $( 'html' ).css({
            'overflow': 'hidden',
        })
    } else {
        
        $( '.feedback-modal' ).css({
            'animation-name': 'feedbackClose',
            'animation-duration': '0.15s',
        })

        setTimeout(function(){
            $( '.feedback' ).css({
            'display': 'none',
            })
            $( 'html' ).css({
                'overflow': 'auto',
            })
        }, 150)
    }
}

$( '.feedback-button' ).on('click', function(){
    feedbackVisibility = !feedbackVisibility;
    showFeedback(feedbackVisibility);
})

$( '.feedback-modal-close' ).on('click', function(){
    feedbackVisibility = !feedbackVisibility;
    showFeedback(feedbackVisibility);
})

// Код для верного отображения лэйблов, меняет стили при условии, что строка ввода имеет значение

$( '.feedback-wrap-form-wrap' ).find('div').find('input').on('input', function(){
    
    let inputValue = $( this ).parent().find('input').val();

    if(+vw <= 1440){
        if(inputValue != ''){
            $( this ).parent().find('label').css({
                'font-size': '13px',
                'line-height': '22px',
                'top': '0',
            })
        } else {
            $( this ).parent().find('label').css({
                'font-size': '20px',
                'line-height': '36px',
                'top': '20px',
            })
        }
    } else {
        if(inputValue != ''){
            $( this ).parent().find('label').css({
                'font-size': '16px',
                'line-height': '22px',
                'top': '-20px',
            })
        } else {
            $( this ).parent().find('label').css({
                'font-size': '28px',
                'line-height': '36px',
                'top': '0',
            })
        }
    }
})