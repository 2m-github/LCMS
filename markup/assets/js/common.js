$(document).ready(function(){

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
