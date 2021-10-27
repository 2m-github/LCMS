$(document).ready(function(){
    // menu
	$(".menu").each(function(){
		var $this = $(this);
		$this.find("li").each(function(){
			$(this).children("a.on").next("ul").show();
			if($(this).children("ul").length){
				$(this).children("a").addClass("fold"); 
			}
			$(this).children("a").on("click",function(){
				if($(this).hasClass("on")){
					$(this).next("ul").stop().slideUp(200);
					$(this).removeClass("on");
				}
				else{
					$(this).parent().siblings().find("ul").slideUp(200);
					$(this).next("ul").stop().slideDown(200);
					$(this).parent().siblings().find("a").removeClass("on");
					$(this).addClass("on");
				}
			});
		});
	});
    $(".btn_menu").on("click",function(){
        $.lockBody();
        $(".menu_box").addClass("on");
    })
    $(".btn_side_close").on("click",function(){
        $.unlockBody();
        $(".menu_box").removeClass("on");
    })
    $(".dim").on("click", function(){
        $.unlockBody();
        $(".menu_box").removeClass("on");
    })

    //datepicker
    $("#datepicker").datepicker({
        showButtonPanel: true,
        changeMonth: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        dateFormat: "yy-mm-dd",
        closeText: "닫기", 
        currentText: "오늘", 
        prevText: '이전 달', 
        nextText: '다음 달', 
        monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 
        monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], 
        dayNames: ['일', '월', '화', '수', '목', '금', '토'], 
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'], 
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
        weekHeader: "주", 
        showMonthAfterYear: true,
        yearSuffix: '.'
      }) 
});

$(window).scroll(function(){

});

(function () {
    // 즉시실행함수
})()

// popup open
function popOpen(ele){
    $(ele).show();
    $.lockBody();
};

// popup close
function popClose(ele){
    $(ele).hide();
    $.unlockBody();
}

// prevent body scroll
var $docEl = $('html, body'),
    $wrap = $('.wrap'),
    $scrollTop;

$.lockBody = function() {
    if(window.pageYOffset) {
        $scrollTop = window.pageYOffset;
        $wrap.css({
            top: - ($scrollTop)
        });
    }
    $docEl.css({
        height: "100%",
        overflow: "hidden"
    });
    $(".dim").fadeIn();
}

$.unlockBody = function() {
    $docEl.css({
        height: "",
        overflow: ""
    });
    $wrap.css({
        top: ''
    });
    $(".dim").fadeOut();
    window.scrollTo(0, $scrollTop);
    window.setTimeout(function () {
        $scrollTop = null;
    }, 0);
}
