$(document).ready(function(){

    $(".frame").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.frame').find('.status').remove();

      $(this).append('<div class="status sausages">Sausages!</div>');
      if ( $(this).is(':last-child') ) {
        $('.frame:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });

   $(".frame").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.frame').find('.status').remove();
    $(this).append('<div class="status legs">Legs!</div>');

    if ( $(this).is(':last-child') ) {
     $('.frame:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
  });

});
