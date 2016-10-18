



// scrolling color transitions

// // these determine points (scroll y pos) at which transitions occur


var scrollHeight = $(window).height();
//update variables on resize

$(window).resize(function(){
    scrollHeight = $(window).height();
});

$(window).on('scroll', function() {
     if ($(window).scrollTop() > scrollHeight) {
         $('.downarrow2').hide();
     }
     else {
         $('.downarrow2').show();
     }
});

// hamburger menu + profile blurb

$(document).ready(function(){
    $("#hamburgericon").click(function(){
        $(this).toggleClass('open');
        $(".profilelink").toggleClass("hideotherUI");
        $(".number").toggleClass("hideotherUI");
        $(".downarrow2").toggleClass("hideotherUI");
        $("#navigation").toggleClass("hidedropdown showdropdown");
        $("#fullpage").toggleClass("noopacity");
        $("body").toggleClass("hidefornav");

        // changes within nav dropdown

        $("#navigation li").toggleClass("noopacity fullopacity");
    });

    $(".profilelink").click(function(){
        $(".profileUI").toggleClass("hideotherUI");
        $("#xicon").toggleClass("noopacity fullopacity");
        $(".hamburger").toggleClass("hideotherUI");
        $(".number").toggleClass("hideotherUI");
        $(".downarrow2").toggleClass("hideotherUI");
        $("#profile").toggleClass("hidedropdown showdropdown");
        $("#fullpage").toggleClass("noopacity");
        $("body").toggleClass("hideforprofile");


});



    $(".drips").hover(function () {
    $(".aboutdrips").toggleClass("revealdrips");
    $(".profilepic").toggleClass("hideprofilepic");
 });
});


// end hamburger menu + profile blurb


