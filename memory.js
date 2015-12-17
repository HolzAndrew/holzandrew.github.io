"use strict";

(function () {
  
var hello = function(){
  console.log("Hi! Welcome to the game of Memory. Good luck!")
}
hello();

var selected_card_array = [];
var card1 = selected_card_array[0];
var card2 = selected_card_array[1];
var clicks = 0
//var click_array = []

var box_color_change = (function(arr){ 
    clicks += 1;
    console.log(clicks);
    $(this).addClass('reveal');
     //var selected_card = $(this);
     selected_card_array.push($(this));
     //console.log(selected_card_array)
     //$(this).attr('class');
     //
     //write fuction to send each to array and pop last
     //selected_card_array.push(selected_card);
     //console.log(selected_card_array)
     if(clicks === 2){
        if (selected_card_array[0].text() === (selected_card_array[1].text())){
          $(this).css('background-color','#444444');
          $(selected_card_array[0]).css('background-color','#444444');
          $(this).css('color','white');
          $(selected_card_array[0]).css('color','white');
          selected_card_array = [];
          console.log(selected_card_array);
          clicks = 0
        } //this does not work!!!
        else if (clicks > 2){
          $(selected_card_array[2]).removeClass('reveal')

        }
        else {
          setTimeout(function(){
          $(selected_card_array[1]).removeClass('reveal');
          $(selected_card_array[0]).removeClass('reveal');  
          console.log(selected_card_array[0])
          clicks = 0;
          selected_card_array = [];    
          }, 1500)
      
          
        //console.log("no match")
      }
      //clicks = 0
    }



});


// var card_match = function(arr){
//     if (selected_card_array[0] === (selected_card_array[1])){
//       $('div.card1').css('background-color','#fff5E5')
//     }

  // for (var i = 0; i <selected_card_array.length; i++) {
  //   if ()
  //};
//}
//card_match();

var EventListeners = function(){
  $('div.box').click(box_color_change);
   //(clicks === 2){
    //evaluate if cards are a match
      

      //}
  }


EventListeners();




})();


