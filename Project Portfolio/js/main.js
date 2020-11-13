$(document).ready(function () {


    //    Плавная прокрутка //
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector: "nav a"
    });
    // --------------------//
    $('#portfolio-projects').mixItUp();


    // FancyBox - galery
    $(".fancy").fancybox({
        // Default - with fix from scroll to top
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false

    });
 $('#header').vide('./img/video/cover2');  
//    // JS Validate
//
//    $("#contact-form").validate({
//            rules: {
//                name: {
//                    requared: true
//                },
//                email: {
//                    requared: true,
//                    email: true
//                },
//                phone: {
//                    requared: true,
//                    phone: true
//                },
////                message: requared: true
//            },
//
//            messages: {
//                name: "Как Вас зовут?",
//                email: {
//                    requared: "Пожалуйста, введите свой email",
//                    email: "Проверьте, верно ли Вы указали свою электронную почту?"
//                        },
//                message: "Пожалуйста, введите сообщение"
//            }
//
//
//            //            phone
//            //            message
////        }
//    })

//
});