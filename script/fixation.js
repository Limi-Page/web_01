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
$(".nav  .li_button").click(function () {
    $(".dark_bg" ).stop().show();
    $(".sidemenu_inner").css( { 'display' : 'block' } );
    $(".sidemenu_inner").css( { 'right' : '-100%' } );
    $(".sidemenu_inner").animate( { right: '0px' } );
});

$(".close").click(function () {
    $(".sidemenu_inner" ).animate( { right: '-100%' }, { 
        complete:function(){
            $(".dark_bg" ).css( { 'display' : 'none' }); }
    });
});

$(".side_list >li").click(function () {
    $(this).find(".side_sub").stop().slideToggle()
});


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

// Login 회원가입 / 로그인하기 토글키 만들기

$(".message a").click(function () {
    $('.toggle_tab').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});















//*참고해서 코드짜기
//
//$(window).scroll(function(){ //스크롤 이벤트 발생 시 
//    
//    var contentHeight = $('#content').height(); //content의 높이 변수 선언 
//    var scrollValue = $(window).scrollTop(); //현재 scroll 위치 변수 선언 
//    
//    if(scrollValue> contentHeight){ //현재 scroll 위치가 content의 높이보다 높을 경우 
//        $("#button").stop(); //이벤트 stop
//    
//    } else { 
//        $("#button").stop().animate({"top":scroll_move+"px"},1000); //button이 스크롤따라 움직임
//    } });
//
