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
});

$(window).scroll(function(){

});

(function () {
    // 즉시실행함수
})()

// popup open
function popOpen(id){
    $.lockBody();
};

// popup close
function popClose(obj){
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
}

$.unlockBody = function() {
    $docEl.css({
        height: "",
        overflow: ""
    });
    $wrap.css({
        top: ''
    });
    window.scrollTo(0, $scrollTop);
    window.setTimeout(function () {
        $scrollTop = null;
    }, 0);
}
