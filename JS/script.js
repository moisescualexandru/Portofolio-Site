$(".button").click(function(){
    if($("nav").hasClass("close")) {
        $("nav").addClass("open");
        $("nav").removeClass("close")
    } else {
        $("nav").removeClass("open");
        $("nav").addClass("close");
    }
})
$("main").click(function(){
    $("nav").removeClass("open");
    $("nav").addClass("close");
})