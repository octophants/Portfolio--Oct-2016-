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

	//transitons for first section

    if($(window).scrollTop() > openingsection) {
        $("body").addClass("one");
        $("body").removeClass("opening");
    } else {
       $("body").removeClass("one");
       $("body").addClass("opening");
    }

    //transitons for second section

    if($(window).scrollTop() > firstsection) {
        $("body").addClass("two");
        $("body").removeClass("one");
    } else {
       $("body").removeClass("two");
    }

    //transitons for third section

    if($(window).scrollTop() > secondsection) {
        $("body").addClass("three");
        $("body").removeClass("two");
    } else {
       $("body").removeClass("three");
    }

    //transitons for fourth section

    if($(window).scrollTop() > thirdsection) {
        $("body").addClass("four");
        $("body").removeClass("three");
    } else {
       $("body").removeClass("four");
    }

    //transitons for fifth section

    if($(window).scrollTop() > fourthsection) {
        $("body").addClass("five");
        $("body").removeClass("four");
        // spin arrow
        $(".downarrow").addClass("rotatearrow");
    } else {
       $("body").removeClass("five");
       // unspin arrow
       $(".downarrow").removeClass("rotatearrow");
    }

});


