$(function(){
  $('#show').on('click', function(){
    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
    $('.sp-header__right').toggleClass('active');
    // $('body').toggleClass('active');
  });
  
  $('.nav__link').on('click', function () {
      $('#show').removeClass('active');
      $('#nav').removeClass('active');
      $('.sp-header__right').toggleClass('active');
  });

  $('.nav__link').on('click', function(){
    var headerHight = $('.header').outerHeight(true);
    var id =$(this).attr('href');
    var pos = $(id).offset().top - headerHight; 
    $('html, body').animate({'scrollTop': pos}, 300);
  });


//画面をスクロールしたらフェードイン
$(window).scroll(function(){
  if($(this).scrollTop()>300){
    $('#toTop').fadeIn(400);
  }
  else{
    $('#toTop').fadeOut(400);
  }
});

  $('#toTop').on('click', function() {
    $('html, body').animate({ 
      scrollTop: 0 }, 300);
     return false;
   });







});