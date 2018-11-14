$(document).ready(function() {
    // run function on initial page load
    interactions() ;
    // run function on resize of the window
    $(window).resize(function() {
       
    });
    // run function on scroll
    $(window).scroll(function() {
 
    });
    function interactions () {
    $('.jqClick').click(function(){
        $('h2').toggleClass('moveL');
        console.log('clicked');
    });
    $('.jqHover').click(function(){
        $('.number4').toggleClass('moveITR');
        console.log('hovered');
    });
    $('.key').click(function() {
        $('h1').toggleClass('typeMove');
    });
}