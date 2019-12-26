//= require jquery3
//= require best_in_place
//= require home

document.addEventListener('turbolinks:load', function(){

    $(".best_in_place").best_in_place();

    $('.best_in_place').bind("ajax:success", function () {
        //$(this).text() // => "<i >"

        $(this).html($(this).text())
    });


});


