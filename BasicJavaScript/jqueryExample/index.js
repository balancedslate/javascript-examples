$(document).keypress(function(event){
    $("h1").animate({opacity: 0.5});
    $("h1").animate({opacity: 1.0});
});

$("button.btn").click(function(event){
    $("h1").animate({opacity: 0.5});
    $("h1").animate({opacity: 1.0});
})