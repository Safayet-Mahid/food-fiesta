$(document).ready(function () {
    $(".product-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".left",
        nextArrow: ".right",
        autoplay: true,
        // mobileFirst: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },

            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,

                }
            },

            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,

                }
            }
        ]
    })

})