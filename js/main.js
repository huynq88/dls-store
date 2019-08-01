
//AOS
// aosAnimation = () => {
//     AOS.init({
//         once: true
//     });
// };

//Preloader
preloader = () => {
    let preloader = $('.preloader');

    $(window).on('load', function() {
        preloader.fadeOut(800);
    });
};

//Nav icon mobile
overlayIconMobile = () => {
    $('#humbuger_icon').click(function(){
        $(this).toggleClass('open');
        $('.navmain_collapse').toggleClass('open');
        $('.overlay').toggleClass('open');
        $('html , body').toggleClass('open_menu');
    });

    /* When user clicks outside */
    $(".overlay").click(function() {
        $(this).toggleClass('open');
        $("#humbuger_icon").toggleClass("open");
        $(".navmain_collapse").toggleClass("open");
        $('html , body').toggleClass('open_menu');
    });
};

//Banner Home
bannerHomeSlide = () => {
  let bannerHomeSlide = $('#banner_home');
    bannerHomeSlide.slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                }
            },

        ]
    });
};

//Back to top
backTopTop = () => {
    $(window).scroll(function() {
        let height = $(window).scrollTop();
        if (height > 600) {
            $('.btn_scroll_top').fadeIn();
        } else {
            $('.btn_scroll_top').fadeOut();
        }
    });
    $(".btn_scroll_top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
};

openHeaderSearch = () => {
    let btnHeaderSearch = $('.header_search_button');
    let searchIcon = $('.header_search_button i');
    let frmHeaderSearch = $('.header_search_frm');
    let inputHeaderSearch = $('.header_search_input');
    btnHeaderSearch.click(function (e) {
        e.preventDefault();
        searchIcon.toggleClass('fa-times');
        frmHeaderSearch.toggleClass('open');
        console.log(inputHeaderSearch.focus());
    });
};

$(document).ready(function () {
    //preloader ();
    overlayIconMobile ();
    bannerHomeSlide();
    openHeaderSearch();
});