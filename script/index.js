//상단 고정
$(window).scroll(function () {
    var windowST = $(this).scrollTop();

    if (windowST > 0) {
        $('#header').addClass('active');
    } else {
        $('#header').removeClass('active');
    };
});


//메뉴
$(".nav  li").mouseover(function () {
    $(".submenu").stop().fadeIn()
});

$(".nav li").mouseleave(function () {
    $(".submenu").stop().fadeOut()
});


////메인 메뉴고정 스크립트
//$(window).scroll(function () {
//    /* 2 */
//    $('.main').each(function (i) {
//        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//        var bottom_of_window = $(window).scrollTop() + $(window).height();
//        /* 3 */
//        if (bottom_of_window > bottom_of_object * 1.5) {
//            $(this).animate({'opacity': '0'}, 500);
//        } else {
//            $("").animate({'opacity': '1'}, 500);
//        };
//    });
//});



//배너
var currentIndex = 0;
var slideCount = $(".slideimg").length;

$(".slideList > div:gt(0)").hide();
$("slideimg").eq(currentIndex).fadeIn("slow");

setInterval(function () {
    var nextIndex = (currentIndex + 1) % slideCount;

    $(".slideimg").eq(currentIndex).fadeOut("slow");
    $(".slideimg").eq(nextIndex).fadeIn("slow");
    currentIndex = nextIndex;

}, 3000)



//로그인 Confirm창
function login_test() {
    var login_test = confirm("로그인 후 이용 가능합니다. 로그인하시겠습니까?");

    if (login_test == true) {
        location.replace('../login.html');

    } else if (confirm_test == false) {
        //   alert("취소(아니오)를 누르셨습니다."); // < 만약 내용을 넣고 싶을때 
    }
}

//준비중입니다 Confirm창
function ready_test() {
    var ready_test = confirm("준비중입니다.메인페이지로 이동하시겠습니까?");

    if (ready_test == true) {
        location.replace('../index.html');

    } else if (confirm_test == false) {
        //   alert("취소(아니오)를 누르셨습니다."); // < 만약 내용을 넣고 싶을때 
    }
}
