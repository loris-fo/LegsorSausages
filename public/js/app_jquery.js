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

    $("#seb").on("click",function(){
      $('.frame').addClass('rotate-left').delay(700).fadeOut(1);
      $('.frame').find('.status').remove();

      $(".frame").append('<div class="status sausages">Sausages!</div>');
      if ( $(".frame").is(':last-child') ) {
        $('.frame:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(".frame").next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });

   $("#seb").on("click",function(){
    $(".frame").addClass('rotate-right').delay(700).fadeOut(1);
    $('.frame').find('.status').remove();
    $(".frame").append('<div class="status legs">Legs!</div>');

    if ( $(".frame").is(':last-child') ) {
     $('.frame:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(".frame").next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
  });

});