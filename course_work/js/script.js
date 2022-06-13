
$(document).ready(function() {
    $('.part3_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1200,
        autoplay:true,
        auoplaySpeed: 2000,
        pauseOnFocus: false,
        variabeleWidth: true,

        responsive: [
            {
              breakpoint: 885,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
        ]
    });
})

