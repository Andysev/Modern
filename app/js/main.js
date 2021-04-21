$(document).ready(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        numStars: 5,
        readOnly: true
      });

    var mixer = mixitup('.products_inner-box');

    $('.product_slider_items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
      });

});