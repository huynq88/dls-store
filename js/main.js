
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

//Scroll to Section
scrollToSection = () => {
    $(document).on("scroll", onScroll);
        $('.js_scroll').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        let target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
};

onScroll = (event) => {
    let scrollPos = $(document).scrollTop();
    $('.item_service').each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));
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

//Fix Header
/*fixHeader = () => {
    let header = $('#header');
    let offsetHeader = header.offset().top;
    let heightWindow = $(window).scrollTop();
    //console.log(offsetHeader);
    if (heightWindow > offsetHeader) {
        header.addClass('fixed');
    }else  {
        header.removeClass('fixed');
    }
    $(window).scroll(function () {
        let heightWindow = $(window).scrollTop();
        if (heightWindow > offsetHeader) {
            header.addClass('fixed');
        }else  {
            header.removeClass('fixed');
        }
    })
};*/

//Slide Partner
slidePartner = () => {
    var swiper = new Swiper('.partner_slide', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
};

//Highlight Slide
slideHighLight = () => {
    var swiper2 = new Swiper('.highlight_news_slide', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }
    });
};

suggestScroll = () => {
    var swiper3 = new Swiper('.suggest_scroll', {
        slidesPerView: 'auto',
        //spaceBetween: 30,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

categorySlide = () => {
    var swiper4 = new Swiper('.category_slide', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
};

queryOrder = () => {
    let item = $('.order_query_option');
    let content = $ ('.order_query_form');
    item.click(function () {
        item.removeClass('active');
        $(this).addClass('active');
        let index = $(this).index();
        console.log(index);
        content.removeClass('active');
        content.eq(index).addClass('active');
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
    scrollToSection();
    slidePartner();
    slideHighLight();
    suggestScroll();
    categorySlide();
    queryOrder();
    openHeaderSearch();
});