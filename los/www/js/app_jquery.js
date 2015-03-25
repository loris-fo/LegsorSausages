// $(document).ready(function(){

// $("#legs_button").click(function(){
//     $('#main_image').fadeToggle( 0, function() {
//        $('#main_image').fadeIn( 2000, function() {

//   });
//   });
// });

// $("#sausages_button").click(function(){
//     $('#main_image').fadeToggle( 0, function() {
//        $('#main_image').fadeIn( 2000, function() {

//   });
//   });
// });

// });
$(document).ready(function(){

    // $(".frame").on("swiperight",function(){
    //   $(this).addClass('rotate-left').delay(0).fadeOut(1);
    //   $('.frame').find('.status').remove();

    //   $(this).append('<div class="status sausages">Sausages!</div>');
    //   if ( $(this).is(':last-child') ) {
    //     $('.frame:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
    //    } else {
    //       $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    //    }
    // });

   $(".frame").on("swipeleft",function(){
    $(this).append('<div class="sausages">Sausages!</div>');
    $('.sausages').delay(100).fadeOut(300, function(){
    $('.sausages').remove();



    if ( $(this).is(':last-child') ) {
     $('.frame:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
  });
  });

});