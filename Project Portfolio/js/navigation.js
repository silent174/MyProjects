$(document).ready(function () {

    //    По нажатие включаем/Выключаем класс --open ///

    $('.navigation__button').on('click', function (e) {
        e.preventDefault();
        $('.navigation__list').toggleClass('navigation__list--open');
        //      --------------- //   

        //    Задаем условие: Если элемент имеет класс ____, то удаляем этот класс и добавляем другой  ///

        if ($('.navigation__button .fa').hasClass('fa-bars')) {
            $('.navigation__button .fa').removeClass('fa-bars');
            $('.navigation__button .fa').addClass('fa-times');
        }
        //      --------------- //   

        //    Иначе удаляем класс ____ и добавляем другой ///
        else {
            $('.navigation__button .fa').removeClass('fa-times');
            $('.navigation__button .fa').addClass('fa-bars');
        }

        //    Такое же условие, но наоборот, для возвращения к исходному значению   ///

        $('.navigation__button .fa').removeclass('fa-bars');
        $('.navigation__button .fa').addClass('fa-times');
    })
    //      --------------- //   

    //    При повторном нажатии на кнопку удаляем класс --open ///
    $('.navigation__list a').on('click', function () {
       

        if ($('.navigation__list').hasClass('navigation__list--open')) {
            if ($('.navigation__button .fa').hasClass('fa-bars')) {
                $('.navigation__button .fa').removeClass('fa-bars');
                $('.navigation__button .fa').addClass('fa-times');
            }
            //      --------------- //   

            //    Иначе удаляем класс ____ и добавляем другой ///
            else {
                $('.navigation__button .fa').removeClass('fa-times');
                $('.navigation__button .fa').addClass('fa-bars');
            }
        }
 $('.navigation__list').removeClass('navigation__list--open');
    })
    //      --------------- //   


    //    Плавная прокрутка //
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector: "nav a"
    });
    // --------------------//

});
