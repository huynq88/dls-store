
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


productAlbum = () => {
    $('.album_full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.album_thumb_lst',
        draggable: false,
        touchMove: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    draggable: false,
                    touchMove: false,
                    swipe: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    draggable: true,
                    touchMove: true,
                    swipe: true,
                }
            },
        ]
    });
    $('.album_thumb_lst').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.album_full',
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                }
            },
        ]
    });
};
quantityBox = () => {
    let currentVal = $(this).prev().val();
    $('.quantity_box--plus').click(function () {
        if (isNaN(currentVal)) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.quantity_box--minus').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });
};
editCartItem = () => {
    let edit = $('.cart_edit_btn');
    edit.click(function () {
        $(this).parent().next('.cart_item_editor').slideToggle('fast');
        if ($(this).text() === "Edit") {
            $(this).text('Cancel');
        } else {
            $(this).text('Edit');
        }
    });
};

$(document).ready(function () {
    //preloader ();
    overlayIconMobile ();
    bannerHomeSlide();
    openHeaderSearch();
    productAlbum ();
    quantityBox ();
    editCartItem ();
});