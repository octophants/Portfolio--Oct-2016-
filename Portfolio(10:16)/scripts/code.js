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

var openingsection = scrollHeight * 0;
var firstsection = scrollHeight * 1;
var secondsection = scrollHeight * 2;
var thirdsection = scrollHeight * 3;
var fourthsection = scrollHeight * 4;
var fifthsection = scrollHeight * 5;

//update variables on resize

$(window).resize(function(){
        scrollHeight = $(window).height();
		openingsection = scrollHeight * 0;
		firstsection = scrollHeight * 1;
		secondsection = scrollHeight * 2;
		thirdsection = scrollHeight * 3;
		fourthsection = scrollHeight * 4;
		fifthsection = scrollHeight * 5;
});

// adding and removing classes based on which section is active




$(window).on("scroll", function() {

	//transitions for first section

    if($(window).scrollTop() > openingsection) {
        $("body").addClass("one");
        $("#hamburgericon span").addClass("UIcolor1");
        $(".firstnumber").addClass("shownumber");
        $(".openingnumber").removeClass("shownumber");
    } else {
       $("body").removeClass("one");
       $("body").addClass("opening");
       $("#hamburgericon span").removeClass("UIcolor1");
       $(".firstnumber").removeClass("shownumber");
       $(".openingnumber").addClass("shownumber");
    }

    //transitions for second section

    if($(window).scrollTop() > firstsection) {
        $("body").addClass("two");
        $("#hamburgericon span").addClass("UIcolor2");
        $(".secondnumber").addClass("shownumber");
        $(".firstnumber").removeClass("shownumber");
    } else {
       $("body").removeClass("two");
       $("#hamburgericon span").removeClass("UIcolor2");
       $(".secondnumber").removeClass("shownumber");
    }

    //transitions for third section

    if($(window).scrollTop() > secondsection) {
        $("body").addClass("three");
        $("#hamburgericon span").addClass("UIcolor3");
        $(".thirdnumber").addClass("shownumber");
        $(".secondnumber").removeClass("shownumber");
    } else {
       $("body").removeClass("three");
       $("#hamburgericon span").removeClass("UIcolor3");
       $(".thirdnumber").removeClass("shownumber");
    }

    //transitions for fourth section

    if($(window).scrollTop() > thirdsection) {
        $("body").addClass("four");
        $("#hamburgericon span").addClass("UIcolor4");
        $(".fourthnumber").addClass("shownumber");
        $(".thirdnumber").removeClass("shownumber");
    } else {
       $("body").removeClass("four");
       $("#hamburgericon span").removeClass("UIcolor4");
       $(".fourthnumber").removeClass("shownumber");
    }

    //transitions for fifth section

    if($(window).scrollTop() > fourthsection) {
        $("body").addClass("five");
        $("#hamburgericon span").addClass("UIcolor5");
        $(".fifthnumber").addClass("shownumber");
        $(".fourthnumber").removeClass("shownumber");
        // spin arrow
        $(".downarrow").addClass("rotatearrow");
    } else {
       $("body").removeClass("five");
       $("#hamburgericon span").removeClass("UIcolor5");
       $(".fifthnumber").removeClass("shownumber");
       // unspin arrow
       $(".downarrow").removeClass("rotatearrow");
    }

});


