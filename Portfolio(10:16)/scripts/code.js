// changing words
var texts = [
"intense", 
"scandalous",
"dope", 
"radical", 
"crazy", 
"impossible", 
"gnarly", 
"endless", 
"wild", 
"colorful", 
"weird", 
"insane", 
"wavey", 
"too many", 
"ridiculous", 
"magical", 
"delicious", 
"sweet", 
"arty farty", 
"nostalgic", 
"exciting"
];

var count = 0;
function changeText() {
    $("#slotmachine").text(texts[count]);
    count < 21 ? count++ : count = 0;
}
setInterval(changeText, 400);

//end changing words



// scrolling color transitions

// // these determine points (scroll y pos) at which transitions occur


var scrollHeight = $(window).height();

var openingsection = scrollHeight * 0.5;
var firstsection = scrollHeight * 1.5;
var secondsection = scrollHeight * 2.5;
var thirdsection = scrollHeight * 3.5;
var fourthsection = scrollHeight * 4.5;
var fifthsection = scrollHeight * 5.5;

//update variables on resize

$(window).resize(function(){
    scrollHeight = $(window).height();
		openingsection = scrollHeight * 0.5;
		firstsection = scrollHeight * 1.5;
		secondsection = scrollHeight * 2.5;
		thirdsection = scrollHeight * 3.5;
		fourthsection = scrollHeight * 4.5;
		fifthsection = scrollHeight * 5.5;
});

// adding and removing classes based on which section is active




$(window).on("scroll", function() {

	//transitions for first section

    if($(window).scrollTop() > openingsection) {
        $("#fullpage").removeClass("default");
        $("#fullpage").addClass("one");
        $("#hamburgericon span").addClass("UIcolor1");
        $("#xicon span").addClass("UIcolor1");
        $(".UItext").addClass("firstcolor");
        $(".firstnumber").addClass("shownumber");
        $(".openingnumber").removeClass("shownumber");
    } else {
       $("#fullpage").removeClass("one");
       $("#fullpage").addClass("opening");
       $("#hamburgericon span").removeClass("UIcolor1");
       $("#xicon span").removeClass("UIcolor1");
       $(".UItext").removeClass("firstcolor");
       $(".firstnumber").removeClass("shownumber");
       $(".openingnumber").addClass("shownumber");
    }

    //transitions for second section

    if($(window).scrollTop() > firstsection) {
        $("#fullpage").addClass("two");
        $("#hamburgericon span").addClass("UIcolor2");
        $("#xicon span").addClass("UIcolor2");
        $(".UItext").addClass("secondcolor");
        $(".secondnumber").addClass("shownumber");
        $(".firstnumber").removeClass("shownumber");
    } else {
       $("#fullpage").removeClass("two");
       $("#hamburgericon span").removeClass("UIcolor2");
       $("#xicon span").removeClass("UIcolor2");
       $(".UItext").removeClass("secondcolor");
       $(".secondnumber").removeClass("shownumber");
    }

    //transitions for third section

    if($(window).scrollTop() > secondsection) {
        $("#fullpage").addClass("three");
        $("#hamburgericon span").addClass("UIcolor3");
        $("#xicon span").addClass("UIcolor3");
        $(".UItext").addClass("thirdcolor");
        $(".thirdnumber").addClass("shownumber");
        $(".secondnumber").removeClass("shownumber");
    } else {
       $("#fullpage").removeClass("three");
       $("#hamburgericon span").removeClass("UIcolor3");
       $("#xicon span").removeClass("UIcolor3");
       $(".UItext").removeClass("thirdcolor");
       $(".thirdnumber").removeClass("shownumber");
    }

    //transitions for fourth section

    if($(window).scrollTop() > thirdsection) {
        $("#fullpage").addClass("four");
        $("#hamburgericon span").addClass("UIcolor4");
        $(".UItext").addClass("fourthcolor");
        $("#xicon span").addClass("UIcolor4");
        $(".fourthnumber").addClass("shownumber");
        $(".thirdnumber").removeClass("shownumber");
    } else {
       $("#fullpage").removeClass("four");
       $("#hamburgericon span").removeClass("UIcolor4");
       $("#xicon span").removeClass("UIcolor4");
       $(".UItext").removeClass("fourthcolor");
       $(".fourthnumber").removeClass("shownumber");
    }

    //transitions for fifth section

    if($(window).scrollTop() > fourthsection) {
        $("#fullpage").addClass("five");
        $("#hamburgericon span").addClass("UIcolor5");
        $("#xicon span").addClass("UIcolor5");
        $(".UItext").addClass("fifthcolor");
        $(".fifthnumber").addClass("shownumber");
        $(".fourthnumber").removeClass("shownumber");
        // spin arrow
        $(".downarrow").addClass("rotatearrow");
    } else {
       $("#fullpage").removeClass("five");
       $("#hamburgericon span").removeClass("UIcolor5");
       $("#xicon span").removeClass("UIcolor5");
       $(".UItext").removeClass("fifthcolor");
       $(".fifthnumber").removeClass("shownumber");
       // unspin arrow
       $(".downarrow").removeClass("rotatearrow");
    }

});


// hamburger menu + profile blurb

$(document).ready(function(){
    $("#hamburgericon").click(function(){
        $(this).toggleClass('open');
        $(".profilelink").toggleClass("hideotherUI");
        $(".number").toggleClass("hideotherUI");
        $(".downarrow").toggleClass("hideotherUI");
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
        $(".downarrow").toggleClass("hideotherUI");
        $("#profile").toggleClass("hidedropdown showdropdown");
        $("#fullpage").toggleClass("noopacity");
        $("body").toggleClass("hideforprofile");

});

});

// end hamburger menu + profile blurb


