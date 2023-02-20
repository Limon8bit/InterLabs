$( ".footer-wrap-top-subscribe-form__email" ).on("input", function(){
    
    let emailInput = $(this).val();
    console.log(emailInput);
    let emailCheckRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailInput.match(emailCheckRegExp)) {
        $(".subscribeButton").css({
            'background-color': '#EF4D9C',
            'cursor' : 'pointer',
        });

        $(".subscribeButton").prop("disabled", false);

    } else {
        $(".subscribeButton").css({
            'background-color': '#9B9B9C',
            'cursor' : 'default',
        });

        $(".subscribeButton").prop("disabled", true);
    }

})