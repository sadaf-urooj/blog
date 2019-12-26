// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("trix")
require("@rails/actiontext")

window.$ = $;
window.jquery = $; // to get jQuery or some other library you're after, if you'd want it


import "bootstrap"
import "controllers"




// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

document.addEventListener('turbolinks:load', function(){

    var url;
    url = $('[rel="next"]').attr('href');
      
    $(window).scroll(function() { 
        if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
            $('.pagination').text("featching more products...")
            $.getScript(url);
        }
      });



  
});






