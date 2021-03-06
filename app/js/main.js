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
        arrows: false,
        responsive: [
          {
            breakpoint: 1160,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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
    $('#loginbtn').click(function(){
      $.fancybox.open({
        src: '#modal',
        type: 'inline'
      });
    });
    
    $('.product_table .product_table-title').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.product_table').find('.product-text').removeClass('active-tab').hide();
        $('.product_table .product_table-titles').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        
        $('.product_table .product_table-titles').find('.table-active').removeClass('table-active');
        $(this).addClass('table-active');
        
        return false;
      });
      $('.settings_tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.settings_tabs .tab_content').find('.tab-item').removeClass('active-item').hide();
          $('.settings_tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-item').fadeIn();
          
          $('.settings_tabs .tabs').find('.tab-active').removeClass('tab-active');
          $(this).addClass('tab-active');
          
          return false;
        });
        $('.profile_tabs .tab').on('click', function(event) {
          var id = $(this).attr('data-id');
            $('.profile_content .tab_content').find('.tab-item').removeClass('active-item').hide();
            $('.profile_tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-item').fadeIn();
            
            $('.profile_tabs .tabs').find('.tab-active').removeClass('tab-active');
            $(this).addClass('tab-active');
            
            return false;
          });
          $('.mozaik').on('click', function(){
            $('.product_item').addClass('newitems_product');
          });
          $('.list_btn').on('click', function(){
            $('.product_item').removeClass('newitems_product');
            $('.product_item').addClass('newitems_list');
          });
          $('.sortedByType').on('click', function(){
            $('.sortedByType').toggleClass('sortedByTypeChek');
          });
      
      var mixer = mixitup('.products_inner-box');
});
(function($) {
  $(function() {
  
    $('input, select').styler();
  
  });
  
  })(jQuery);
 
  