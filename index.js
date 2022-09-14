let modalAddToCartHtml = `
        <img src="./Assets/icons/Cart.svg" alt="Cart">
        <div class="modalContentInfo">
            <h4>Cart is Empty</h4>
            <span>Add some items to the cart to checkout</span>
        </div>
        <button class="closeModal">Back To Menu</button>`


let requestDishHtml = `
<div class="requestDish">
    <h4>Request a Dish</h4>
    <div class="modalInputWrapper">
        <label for="dishName">Name*</label>
        <input name="dishName" type="text" placeholder="Enter name of the dish">
    </div>
    <div class="modalInputWrapper">
        <label for="ImageUrl">Upload an image</label>
        <input name="ImageUrl" type="text" placeholder="Paste a URL">
    </div>
    <div class="modalBtnGrp">
        <button class="closeModal" id="cancelSubmit">Cancel</button>
        <button id="Submit">Submit Request</button>
    </div>
</div>`
function modalEvents(){

    jQuery(document).on('click' , '.RequestDishCTA button' , function(){
        jQuery('.modalWrapper').fadeIn(500);
        jQuery('.modalContent').html(requestDishHtml)
        jQuery('body').addClass('overlayShow');
    })
    jQuery(document).on('click' , '.addToCart' , function(){
        jQuery('.modalWrapper').fadeIn(500);
        jQuery('.modalContent').html(modalAddToCartHtml)
        jQuery('body').addClass('overlayShow');
    })
    jQuery(document).on('click' , '.closeModal' , function(){
        jQuery('.modalWrapper').fadeOut(500);
        jQuery('.modalContent').empty();
        jQuery('body').removeClass('overlayShow');
    })

}

function carouselEvents(){

    var cardsHTML = jQuery('.MenuItemsCardWrapper').html();
    var totalCards = jQuery('.MenuItemsCardWrapper .MenuItemCard').length;
    console.log(totalCards)
    jQuery('.menuCaouselItemWrapper').html(cardsHTML)
    
    let index = 0;

    function resetValues(){
        jQuery('.menuCarouselPopular button').removeClass('disable')
    }

    jQuery(document).on('click' , '.prevSlide' , function(){

        resetValues();
        if(index === 1){
            jQuery(this).addClass('disable')
        }
        if(index > 0){
            if(index === totalCards -2) --index;
            --index;   
            console.log(index)
            jQuery('.menuCaouselItemWrapper').animate({
                scrollLeft: (jQuery('.MenuItemCard').innerWidth() + 50)*index
            }, 500);
        }else{
            jQuery(this).addClass('disable')
        }
    })
    jQuery(document).on('click' , '.nextSlide' , function(){

        
        resetValues();
        if(index === totalCards - 4){
            jQuery(this).addClass('disable')
        }

        if(index < totalCards){
            ++index;
            console.log(index)
            jQuery('.menuCaouselItemWrapper').animate({
                scrollLeft: (jQuery('.MenuItemCard').innerWidth() + 50)*index
            }, 500);
        }else{
            jQuery(this).addClass('disable')
        }

        
    })

}

function videoEvents(){

    jQuery(document).on('click' , '.videoContentWrapper button' , function(){
        var video = jQuery(this).closest('.videoContentWrapper').find('.sampleVideo').get(0);
        if(video.paused)
        {
            jQuery(this).hide(500);
            video.play();
        }
        else video.pause();        
    })
    jQuery(document).on('click' , '.sampleVideo' , function(){
        var video = jQuery(this).get(0);
        if(!video.paused)
        {
            jQuery('.videoContentWrapper button').show(500);
            video.pause();
        }
        else{
            jQuery('.videoContentWrapper button').hide(500);
            video.play();
        };      
    })

}



jQuery(function() {
   
    
    carouselEvents();    
    videoEvents();
    modalEvents();
    
 });