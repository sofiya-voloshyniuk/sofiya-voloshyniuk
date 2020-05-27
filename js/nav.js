$(document).ready(function () {
    // $('.facts-carousel').slick();
    /* Що відбуватиметься після кліку на гумбургер */

    $('.nav-icon').click(function () {
        $(this).toggleClass('open'); /* По кліку на гамбургер перемикати клас */
        $('.navigation').toggleClass('open');

        if ($('.navigation .overlay').length > 0) {
            $('.navigation .overlay').remove();
        } else {
            $('.navigation').prepend('<div class="overlay"></div>');
            $('.navigation .overlay').click(function () {
                $('.nav-icon').removeClass('open');
                $('.navigation').removeClass('open');
                $('.navigation .overlay').remove(); /* Видалити елемент з класом overlay */
            });
        }
    });

    /* END: Що відбуватиметься після кліку на гумбургер */
    // const navMenu = $('.navigation-menu');
    // const burgerMenu = $('.navigation-menu-mobile');
    // $(window).scroll(function() {
    //     if (window.pageYOffset > navMenu.height()) {
    //         navMenu.hide();
    //         burgerMenu.show();
    //     } else if (window.pageYOffset < navMenu.height()) {
    //         navMenu.show();
    //     }
    // });

    /* Що відбуватиметься після кліку на будь-який елемент '.nav-link' */

    $('.nav-link').click(function () {
        if ($('.navigation .overlay').length > 0)
            $('.navigation .overlay').remove();
        if ($('.navigation').hasClass('open'))
            $('.navigation').removeClass('open');
        if ($('.nav-icon').hasClass('open'))
            $('.nav-icon').removeClass('open');
        return true; /* Виконати перехід по лінку */
    });

    /* END: Що відбуватиметься після кліку на будь-який елемент '.nav-link' */

    /* Анімований скролл після кліку на будь-який елемент '.js-scroll' */

    $('.js-scroll').click(function () {
        var id = $(this).attr("href");
//        var offset = 80;
        var offset = 0;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500); /* Час анімованого скролу до секції документу */
        return false;
    });

    /* END: Анімований скролл після кліку на будь-який елемент '.js-scroll' */

    /* Зміна класу для <nav> по скролу */

    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top < 100) {
            $('nav').removeClass('topfixed');
        } else {
            $('nav').addClass('topfixed');
        }
    });

});