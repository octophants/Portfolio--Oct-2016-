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

$(document).ready(function(){

    if ($("#fullpage").hasClass("fullpage-wrapper")) {
        $(".bodytext").addClass("red")};

    
});








