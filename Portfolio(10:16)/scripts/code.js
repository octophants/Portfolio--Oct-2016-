// changing words
var texts = [
"intense", 
"bold",
"dope", 
"radical", 
"crazy", 
"odd", 
"gnarly", 
"trippy", 
"wild", 
"colorful", 
"weird", 
"insane", 
"wavey", 
"too much", 
"ridiculous", 
"groovy",
"magical", 
"loopy", 
"awake", 
"hungry", 
"strange",
"noticeable", 
"prepared",
"ready"
];

var count = 0;
function changeText() {
    $("#slotmachine").text(texts[count]);
    count < 24 ? count++ : count = 0;
}
setInterval(changeText, 300);

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
        $(".bodytext").removeClass("default");
        $("#fullpage").addClass("one");
        $(".bodytext").addClass("one");
        $("#hamburgericon span").addClass("UIcolor1");
        $("#xicon span").addClass("UIcolor1");
        $(".UItext").addClass("firstcolor");
        $(".firstnumber").addClass("shownumber");
        $(".openingnumber").removeClass("shownumber");
        $(".google1").addClass("google1move");
        $(".google2").addClass("google2move");
        $(".google3").addClass("google3move");
        $(".defaultsplash1").addClass("splash1");
        $(".defaultsplash2").addClass("splash2");
        $(".defaultsplash3").addClass("splash3");
    } else {
       $("#fullpage").removeClass("one");
       $(".bodytext").removeClass("one");
       $("#fullpage").addClass("opening");
       $(".bodytext").addClass("opening");
       $("#hamburgericon span").removeClass("UIcolor1");
       $("#xicon span").removeClass("UIcolor1");
       $(".UItext").removeClass("firstcolor");
       $(".firstnumber").removeClass("shownumber");
       $(".openingnumber").addClass("shownumber");
       $(".defaultsplash1").removeClass("splash1");
       $(".defaultsplash2").removeClass("splash2");
       $(".defaultsplash3").removeClass("splash3");
       $(".google1").removeClass("google1move");
       $(".google2").removeClass("google2move");
       $(".google3").removeClass("google3move");
    }

    //transitions for second section

    if($(window).scrollTop() > firstsection) {
        $("#fullpage").addClass("two");
        $(".bodytext").addClass("two");
        $("#hamburgericon span").addClass("UIcolor2");
        $("#xicon span").addClass("UIcolor2");
        $(".UItext").addClass("secondcolor");
        $(".secondnumber").addClass("shownumber");
        $(".firstnumber").removeClass("shownumber");
        $(".tcp1").addClass("tcp1move");
        $(".tcp2").addClass("tcp2move");
        $(".tcp3").addClass("tcp3move");
        $(".google1").removeClass("google1move");
        $(".google2").removeClass("google2move");
        $(".google3").removeClass("google3move");
    } else {
       $("#fullpage").removeClass("two");
       $(".bodytext").removeClass("two");
       $("#hamburgericon span").removeClass("UIcolor2");
       $("#xicon span").removeClass("UIcolor2");
       $(".UItext").removeClass("secondcolor");
       $(".secondnumber").removeClass("shownumber");
       $(".tcp1").removeClass("tcp1move");
       $(".tcp2").removeClass("tcp2move");
       $(".tcp3").removeClass("tcp3move");

    }

    //transitions for third section

    if($(window).scrollTop() > secondsection) {
        $("#fullpage").addClass("three");
        $(".bodytext").addClass("three");
        $("#hamburgericon span").addClass("UIcolor3");
        $("#xicon span").addClass("UIcolor3");
        $(".UItext").addClass("thirdcolor");
        $(".thirdnumber").addClass("shownumber");
        $(".secondnumber").removeClass("shownumber");
        $(".bfadt1").addClass("bfadt1move");
        $(".bfadt2").addClass("bfadt2move");
        $(".bfadt3").addClass("bfadt3move");
        $(".tcp1").removeClass("tcp1move");
        $(".tcp2").removeClass("tcp2move");
        $(".tcp3").removeClass("tcp3move");
    } else {
       $("#fullpage").removeClass("three");
       $(".bodytext").removeClass("three");
       $("#hamburgericon span").removeClass("UIcolor3");
       $("#xicon span").removeClass("UIcolor3");
       $(".UItext").removeClass("thirdcolor");
       $(".thirdnumber").removeClass("shownumber");
       $(".bfadt1").removeClass("bfadt1move");
       $(".bfadt2").removeClass("bfadt2move");
       $(".bfadt3").removeClass("bfadt3move");
    }

    //transitions for fourth section

    if($(window).scrollTop() > thirdsection) {
        $("#fullpage").addClass("four");
        $(".bodytext").addClass("four");
        $("#hamburgericon span").addClass("UIcolor4");
        $(".UItext").addClass("fourthcolor");
        $("#xicon span").addClass("UIcolor4");
        $(".fourthnumber").addClass("shownumber");
        $(".thirdnumber").removeClass("shownumber");
        $(".portal1").addClass("portal1move");
        $(".portal2").addClass("portal2move");
        $(".portal3").addClass("portal3move");
        $(".bfadt1").removeClass("bfadt1move");
        $(".bfadt2").removeClass("bfadt2move");
        $(".bfadt3").removeClass("bfadt3move");
    } else {
       $("#fullpage").removeClass("four");
       $(".bodytext").removeClass("four");
       $("#hamburgericon span").removeClass("UIcolor4");
       $("#xicon span").removeClass("UIcolor4");
       $(".UItext").removeClass("fourthcolor");
       $(".fourthnumber").removeClass("shownumber");
       $(".portal1").removeClass("portal1move");
       $(".portal2").removeClass("portal2move");
       $(".portal3").removeClass("portal3move");
    }

    //transitions for fifth section

    if($(window).scrollTop() > fourthsection) {
        $("#fullpage").addClass("five");
        $(".bodytext").addClass("five");
        $("#hamburgericon span").addClass("UIcolor5");
        $("#xicon span").addClass("UIcolor5");
        $(".UItext").addClass("fifthcolor");
        $(".fifthnumber").addClass("shownumber");
        $(".fourthnumber").removeClass("shownumber");
        // spin arrow
        $(".downarrow").addClass("rotatearrow");
        $(".oldportfolio1").addClass("oldportfolio1move");
        $(".oldportfolio2").addClass("oldportfolio2move");
        $(".oldportfolio3").addClass("oldportfolio3move");
        $(".portal1").removeClass("portal1move");
        $(".portal2").removeClass("portal2move");
        $(".portal3").removeClass("portal3move");
    } else {
       $("#fullpage").removeClass("five");
       $(".bodytext").removeClass("five");
       $("#hamburgericon span").removeClass("UIcolor5");
       $("#xicon span").removeClass("UIcolor5");
       $(".UItext").removeClass("fifthcolor");
       $(".fifthnumber").removeClass("shownumber");
       $(".oldportfolio1").removeClass("oldportfolio1move");
       $(".oldportfolio2").removeClass("oldportfolio2move");
       $(".oldportfolio3").removeClass("oldportfolio3move");
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

    $(".drips").hover(function () {
    $(".aboutdrips").toggleClass("revealdrips");
    $(".profilepic").toggleClass("hideprofilepic");
 });
});

// end hamburger menu + profile blurb


