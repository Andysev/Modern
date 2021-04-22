$(document).ready(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        numStars: 5,
        readOnly: true
      });

    

    $('.product_slider_items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
      });


      
    $('.header_btn-menu').on('click', function(){
      $('.header_box').toggleClass('active');
      $('.header_logo').toggleClass('active');
    });
    

    $('.menu_btn').on('click', function(){
      $('.menu_list').slideToggle();
    });
    $('.menu_btn-mob').on('click', function(){
      $('.menu').slideToggle('');
      $('.menu_list').slideToggle('');
    });

      var mixer = mixitup('.products_inner-box');
});